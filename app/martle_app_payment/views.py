from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from django.utils import timezone
from datetime import timedelta

from martle_app_backend.models import OrderPlaced, Product, ProductStatusChoices
from martle_app_authentication.models import User, CustomerAddress

from .models import Martlet
from .tasks import process_order
from .serializers import MartletSerializer

import stripe
import json
import os

# Create your views here.
stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")


def parsed_product_cart_data(data_list):
    data = json.dumps(data_list)
    parsed_list = json.loads(data)

    return parsed_list


class CreateSubscription(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        product_cart_data = parsed_product_cart_data(
            request.data.get("product_cart_data"))

        session = stripe.checkout.Session.create(
            line_items=[{
                'price_data': {
                    'currency': 'inr',
                    'product_data': {
                        'name': product['product_title'],
                    },
                    'unit_amount': product['product_discounted_price'] * 100,
                },
                'quantity': product['product_quantity'],
            } for product in product_cart_data],
            mode='payment',
            ui_mode='embedded',
            return_url='http://localhost:5173/checkout/return?session_id={CHECKOUT_SESSION_ID}',
        )

        return Response({"client_secret": session.client_secret})


class MartlePayView(APIView):
    def get(self, request):
        martlet = Martlet.objects.get(user=request.user.id)
        martlet_serializer = MartletSerializer(martlet)

        return Response(martlet_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        payment_method = request.data.get("payment_method")


class PlaceOrderView(APIView):
    def post(self, request):
        try:
            order_data_list = request.data

            for order_data in order_data_list:
                user_id = order_data.pop('user')
                address_id = order_data.pop('address')
                product_id = order_data.pop('product')
                status_id = order_data.pop('status')
                payment_method = order_data.pop('payment_method')
                order_data['user'] = User.objects.get(pk=user_id)
                order_data['address'] = CustomerAddress.objects.get(
                    pk=address_id)
                order_data['product'] = Product.objects.get(
                    pk=product_id)
                order_data['status'] = ProductStatusChoices.objects.get(
                    pk=status_id)

            order_instances = OrderPlaced.objects.bulk_create(
                [OrderPlaced(**order_data) for order_data in order_data_list])

            for order_instance in order_instances:
                process_order.apply_async(
                    args=[order_instance.id, payment_method], countdown=5)

            return Response(status=status.HTTP_200_OK)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class TransferAmountView(APIView):
    def post(self, request):
        amount = request.data.get("amount")

        martlet_user = Martlet.objects.get(user=request.user.id)

        if float(amount) > martlet_user.martle_bank:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        martlet_user.martle_pay += float(amount)
        martlet_user.martle_bank -= float(amount)
        martlet_user.save()

        return Response(status=status.HTTP_200_OK)
