from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from martle_app_backend.models import OrderPlaced

from .models import Martlet
from .serializers import MartletSerializer, OrderPlacedSerializer

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


class WebHook(APIView):
    def post(self, request):
        """
            This API handling the webhook .

            :return: returns event details as json response .
        """
        request_data = json.loads(request.body)
        if webhook_secret:
            # Retrieve the event by verifying the signature using the raw body and secret if webhook signing is configured.
            signature = request.META['HTTP_STRIPE_SIGNATURE']
            try:
                event = stripe.Webhook.construct_event(
                    payload=request.body,
                    sig_header=signature,
                    secret=webhook_secret
                )
                data = event['data']
            except ValueError as err:
                raise err
            except stripe.error.SignatureVerificationError as err:
                raise err
            # Get the type of webhook event sent - used to check the status of PaymentIntents.
            event_type = event['type']
        else:
            data = request_data['data']
            event_type = request_data['type']
        data_object = data['object']

        if event_type == 'checkout.session.completed':
            # Payment is successful and the subscription is created.
            # You should provision the subscription and save the customer ID to your database.
            print("-----checkout.session.completed----->",
                  data['object']['customer'])
        elif event_type == 'invoice.paid':
            # Continue to provision the subscription as payments continue to be made.
            # Store the status in your database and check when a user accesses your service.
            # This approach helps you avoid hitting rate limits.
            print("-----invoice.paid----->", data)
        elif event_type == 'invoice.payment_failed':
            # The payment failed or the customer does not have a valid payment method.
            # The subscription becomes past_due. Notify your customer and send them to the
            # customer portal to update their payment information.
            print("-----invoice.payment_failed----->", data)
        else:
            print('Unhandled event type {}'.format(event_type))

        return Response(status=status.HTTP_200_OK)


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
            order_placed_serializer = OrderPlacedSerializer(
                data=request.data)

            if order_placed_serializer.is_valid():
                order_placed_serializer.save()
                return Response(status=status.HTTP_200_OK)

            return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)
