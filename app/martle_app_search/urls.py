from django.urls import path
from .views import ProductSearchDocumentView, ProductSearchView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('search', ProductSearchDocumentView, basename="product-search")

urlpatterns = [
    path("product-search/<str:query>/", ProductSearchView.as_view()),
]

urlpatterns += router.urls
