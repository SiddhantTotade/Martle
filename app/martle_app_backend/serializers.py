from .models import *
from martle_app_authentication.helpers import *
from martle_app_authentication.serializers import UserProfileSerializer
from rest_framework import serializers


# Project Serializers

# --------- Product Image Serializer
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

    def create(self, validated_data):
        product_image = ProductImage.objects.create(
            product_image=validated_data['product_image'], product_image_url=validated_data['product_image_url'], product_img_file=validated_data['product_img_file'])
        product_image.save()
        return product_image


# --------- Product Serializer
class ProductSerializer(serializers.ModelSerializer):

    product_images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        depth = 1
        fields = ['id', 'product_title', 'product_selling_price', 'product_discounted_price',
                  'product_description', 'product_details', 'product_brand', 'product_category', 'product_images']

    def create(self, validated_data):
        product = Product.objects.create(product_title=validated_data['product_title'], product_selling_price=validated_data['product_selling_price'], product_discounted_price=validated_data['product_discounted_price'],
                                         product_description=validated_data['product_description'], product_details=validated_data['product_details'], product_brand=validated_data['product_brand'], product_category=validated_data['product_category'])
        product.save()
        return product


class ProductLightSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['id', 'product_title', 'product_discounted_price', 'product_selling_price',
                  'product_brand', 'product_category', 'product_slug', 'product_cover_image']

    # def get_favourites(self, obj):
    #     user = self.context['request'].user
    #     favourite_product = obj.favourites.filter(user=user)
    #     serializer = FavoriteProductSerializer(favourite_product, many=True)
    #     return serializer.data


class ProductPlaceOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['product_title', 'product_cover_image',
                  'product_brand', 'product_category']


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brands
        fields = '__all__'


class ProductBrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ''


# --------- Cart Serializer
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        depth = 1
        exclude = ['user']
        # fields = ['product', 'quantity']


# --------- Rating and Review Serializer
class RatingAndReviewSerializer(serializers.ModelSerializer):
    user = UserProfileSerializer(read_only=True)

    class Meta:
        model = RatingAndReview
        fields = ['user', 'product', 'review', 'rating', 'date']


# --------- Question and Answer Serializer
class QuestionAndAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAndAnswer
        fields = ['user', 'product', 'query']

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)

    #     representation.pop("product")
    #     representation.pop("user")

    #     return representation


# --------- Order Placed Serializer
class OrderPlacedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


# --------- Specially from Serializer (Specific Categorized Product)
class SpecialProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ['product_cover_image', 'product_slug']


# --------- Wedding Serializer
class WeddingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        depth = 2
        fields = ['product_gender', 'product_cover_image', 'product_slug']


# --------- Favorite Serializer
class FavoriteProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id']
