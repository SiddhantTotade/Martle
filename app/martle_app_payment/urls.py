from django.urls import path
from .views import CreateSubscription, WebHook, MartlePayView, PlaceOrderView


urlpatterns = [
    path('create-subscription/', CreateSubscription.as_view()),
    path('webhook-test/', WebHook.as_view()),
    path('martle-pay/', MartlePayView.as_view()),
    path('place-order/', PlaceOrderView.as_view()),
]
