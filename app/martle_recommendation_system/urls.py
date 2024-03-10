from django.urls import path
from .views import *

urlpatterns = [
    path("interaction/", UserInteractionView.as_view(), name='user-interaction'),
    path("recommended_products/", RecommendProductView.as_view(),
         name='recommend-product'),
]
