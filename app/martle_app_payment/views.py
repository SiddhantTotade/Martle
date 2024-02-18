import stripe
import json
from django.shortcuts import redirect
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.

stripe.api_key = "sk_test_51N2U8SSB843aOHbzpAJPhulzlQ0qyQGerhEhk75rx1eBzChHbNp1K0aIkvNniyIF7q2p2VnacRZG9lXwI1RFxdAK00E3O7sBvY"


class CreateSubscription(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        session = stripe.checkout.Session.create(
            line_items=[{
                'price_data': {
                    'currency': 'inr',
                    'product_data': {
                        'name': 'T-shirt',
                    },
                    'unit_amount': 2000,
                },
                'quantity': 1,
            }],
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
