from django.urls import re_path
from .views import *
from .auth_views import *

urlpatterns = [

    # User Authentication Route
    re_path(r"^register$",RegisterView.as_view()),
    re_path(r"^verify-otp$",VerifyOTP.as_view()),

    # Media Route
    re_path(r"^product-images/savefile$",saveFile),

    # Application Route
    re_path(r"^product$",ProductView.as_view()),
    re_path(r"^product/([0-9]+)$",ProductView.as_view()),
    re_path(r"^customer/([0-9]+)$",CustomerView.as_view()),
    re_path(r"^customer-save$",CustomerView.as_view()),
]