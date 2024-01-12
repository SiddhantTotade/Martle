from django.urls import re_path
from .views import *

urlpatterns = [
    re_path(r"^login/$", UserLoginView.as_view(), name='login'),
    re_path(r"^register/$", UserRegistrationView.as_view(), name='register'),
    re_path(r"^profile/$", UserProfileView.as_view(), name='profile'),
    re_path(r"^change-password/$", UserChangePasswordView.as_view(),
            name='change-password'),
    re_path(r"^reset-password/$", SendPasswordResetEmailView.as_view(),
            name='send_reset_password_email'),
    re_path(r"^reset-password/<uid>/<token>/$",
            UserPasswordResetView.as_view(), name='reset_password'),
]
