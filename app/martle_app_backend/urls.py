from django.urls import re_path
from .views import *
from .auth_views import *

urlpatterns = [

    # User Authentication
    re_path(r"^register$",RegisterView.as_view()),
    re_path(r"^verify-otp$",VerifyOTP.as_view()),
]