from django.urls import path
from .views import CreateSubscription, MartlePayView, PlaceOrderView, TransferAmountView


urlpatterns = [
    path('create-subscription/', CreateSubscription.as_view()),
    path('martle-pay/', MartlePayView.as_view()),
    path('place-order/', PlaceOrderView.as_view()),
    path('transfer-money/', TransferAmountView.as_view()),
]
