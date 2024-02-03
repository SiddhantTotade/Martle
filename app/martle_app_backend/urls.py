from django.urls import re_path, path
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
# router.register(r"images",SetImageView, basename='product_images')

urlpatterns = [
    # Media Route
    re_path(r"^product-images/savefile/$", SetImageView),
    re_path(r"^product-images/get-images$", SetImageView),

    # Application Route
    re_path(r"^all-products/(?P<product_categories>[\w,-]+)/$",
            ProductView.as_view(), name="all_products"),
    re_path(r"^all-brands/$", BrandView.as_view(), name="all_brands"),
    re_path(r"^product/([0-9]+)$", ProductView.as_view()),

    # ---------> add and update addresses
    re_path(r"^address/$", CustomerAddressView.as_view()),
    re_path(r"^address-save$", CustomerAddressView.as_view()),
    re_path(r"^change-shipping-address/([0-9]+)$", change_shipping_address),

    re_path(r"^get-description$", upload_description),

    path("product/<slug:slug>/", GetProductBySlug.as_view(),
         name="get_specific_product"),
    path("product-for-place-order/<slug:slug>/", ProductForPlaceOrder.as_view(),
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

    # ---------> Rating and Review of Products
    path("product/ratingandreview/<int:pk>/",
         RatingsAndReviewsView.as_view(), name="get_and_create_rating_and_review"),

    # ---------> Question and Answer of Products
    path("product/questionandanswer/<int:pk>/",
         QuestionAndAnswerView.as_view(), name="get_and_create_question_and_answer"),

    # ---------> ordered products
    path("orders/", CustomerOrdersView.as_view(), name="orders"),
    path("orders/<slug:slug>", SingleOrderView.as_view(), name="single_order"),
]
