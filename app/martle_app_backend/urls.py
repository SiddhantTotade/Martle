from django.urls import re_path, path
from .views import *
from .auth_views import *
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r"images",SetImageView, basename='product_images')

urlpatterns = [

    # User Authentication Route
    re_path(r"^login/$", UserLoginView.as_view(), name='login'),
    re_path(r"^register/$", UserRegistrationView.as_view(), name='register'),
    re_path(r"^profile/$", UserProfileView.as_view(), name='profile'),
    re_path(r"^change-password/$", UserChangePasswordView.as_view(),
            name='change-password'),
    re_path(r"^reset-password/$", SendPasswordResetEmailView.as_view(),
            name='send_reset_password_email'),
    re_path(r"^reset-password/<uid>/<token>/$",
            UserPasswordResetView.as_view(), name='reset_password'),

    # Media Route
    re_path(r"^product-images/savefile/$", SetImageView),
    re_path(r"^product-images/get-images$", SetImageView),

    # Application Route
    re_path(r"^all-products/$", ProductView.as_view(), name="all_products"),
    re_path(r"^all-brands/$", BrandView.as_view(), name="all_brands"),
    re_path(r"^product/([0-9]+)$", ProductView.as_view()),
    re_path(r"^customer/([0-9]+)$", CustomerView.as_view()),
    re_path(r"^customer-save$", CustomerView.as_view()),

    re_path(r"^get-description$", upload_description),

    path("product/<slug:slug>", GetProductBySlug.as_view(),
         name="get_specific_product"),
    re_path(r"^product/desc/([0-9]+)$", get_description),

    # ---------> Add and Delete Favorites Items
    path("product/favorite/", FavoriteView.as_view(),
         name="get_and_create_favorite"),
    path("product/favorite/<int:id>/", favorite_add, name="delete_favorite"),

    # ---------> Add and Delete Cart Items
    path("product/cart/",
         CartView.as_view(), name="get_and_create_favorite"),
    path("product/cart/<int:pk>",
         CartView.as_view(), name="delete_favorite"),
]
