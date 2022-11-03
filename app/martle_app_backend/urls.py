from django.urls import re_path
from .views import *
from .auth_views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('prod/',Test,basename='prod')

urlpatterns = [

    # User Authentication
    re_path(r"^register$",RegisterView.as_view()),
    re_path(r"^verify-otp$",VerifyOTP.as_view()),

    # Application Route
    re_path(r"^product$",ProductView.as_view()),
    re_path(r"^product/([0-9]+)$",ProductView.as_view()),
    re_path(r"^customer/([0-9]+)$",CustomerView.as_view()),
    re_path(r"^customer-save$",CustomerView.as_view()),
]