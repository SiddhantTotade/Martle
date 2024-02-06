from .models import *
from martle_app_authentication.helpers import *
from martle_app_authentication.serializers import UserProfileSerializer, CustomerAddressSerializer
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
    favorite = serializers.SerializerMethodField()
    cart = serializers.SerializerMethodField()
    product_images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        depth = 1
        fields = "__all__"

    def create(self, validated_data):
        product = Product.objects.create(product_title=validated_data['product_title'], product_selling_price=validated_data['product_selling_price'], product_discounted_price=validated_data['product_discounted_price'],
                                         product_description=validated_data['product_description'], product_details=validated_data['product_details'], product_brand=validated_data['product_brand'], product_category=validated_data['product_category'])
        product.save()
        return product

    def get_favorite(self, obj):
        return [{str(user.id): obj.id} for user in obj.favorite.all()]

    def get_cart(self, obj):
        return [{str(user.id): obj.id} for user in obj.cart.all()]


class ProductLightSerializer(serializers.ModelSerializer):
    favorite = serializers.PrimaryKeyRelatedField(
        many=True, queryset=User.objects.all(), allow_null=True)
    cart = serializers.PrimaryKeyRelatedField(
        many=True, queryset=User.objects.all(), allow_null=True)

    class Meta:
        model = Product
        fields = ['id', 'product_title', 'product_discounted_price', 'product_selling_price',
                  'product_brand', 'product_category', 'product_slug', 'product_cover_image', 'favorite', 'cart']

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


# --------- Favorite Serializer
class FavoriteProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


# --------- Cart Serializer
class CartProductSerializer(serializers.Serializer):
    cart_data = ProductLightSerializer(many=True)
    active_address = CustomerAddressSerializer(allow_null=True)


class ProductStatusChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductStatusChoices
        fields = "__all__"


# --------- Orders Serializer
class OrderedProductSerializer(serializers.ModelSerializer):
    address = CustomerAddressSerializer()
    product = ProductLightSerializer()
    status = ProductStatusChoiceSerializer()

    class Meta:
        model = OrderPlaced
        fields = '__all__'
