from django.urls import re_path
from .views import *
from .auth_views import *
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r"images",SetImageView, basename='product_images')

urlpatterns = [

    # User Authentication Route
    re_path(r"^register$",RegisterView.as_view()),
    re_path(r"^verify-otp$",VerifyOTP.as_view()),

    # Media Route
    re_path(r"^product-images/savefile/$",SetImageView),
    re_path(r"^product-images/get-images$",SetImageView),

    # Application Route
    re_path(r"^product/$",ProductView.as_view()),
    re_path(r"^all-product/$",ProductView.as_view()),
    re_path(r"^product/([0-9]+)$",ProductView.as_view()),
    re_path(r"^customer/([0-9]+)$",CustomerView.as_view()),
    re_path(r"^customer-save$",CustomerView.as_view()),

    re_path(r"^get-description$",upload_description),

    re_path(r"^product/id/([0-9]+)$",GetProductById.as_view()),
    re_path(r"^product/desc/([0-9]+)$",get_description),
]