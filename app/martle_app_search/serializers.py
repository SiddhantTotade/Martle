from martle_app_backend.models import Product
from rest_framework import serializers
from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from .documents import ProductDocument


class ProductDocumentSerializer(DocumentSerializer):
    class Meta:
        document = ProductDocument
        fields = ['product_title', 'product_description',
                  'product_details', 'product_cover_image']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_title', 'product_description',
                  'product_details', 'product_cover_image']
