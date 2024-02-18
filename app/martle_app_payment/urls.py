from django.urls import path
from .views import CreateSubscription, WebHook


urlpatterns = [
    path('create-subscription/', CreateSubscription.as_view()),
    path('webhook-test/', WebHook.as_view()),
]
