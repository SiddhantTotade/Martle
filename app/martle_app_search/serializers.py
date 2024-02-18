from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from martle_app_backend.models import Product
from .documents import ProductDocument


class ProductDocumentSerializer(DocumentSerializer):
    class Meta:
        document = ProductDocument
        fields = ['product_title', 'product_discounted_price',
                  'product_selling_price', 'product_cover_image', 'product_slug']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_title', 'product_discounted_price',
                  'product_selling_price', 'product_cover_image', 'product_slug']
