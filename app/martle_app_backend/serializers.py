from .models import *
from martle_app_authentication.helpers import *
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
        fields = ['id', 'product_title', 'product_discounted_price',
                  'product_brand', 'product_category', 'product_slug', 'product_cover_image']

    def get_favourites(self, obj):
        user = self.context['request'].user
        favourite_product = obj.favourites.filter(user=user)
        serializer = FavoriteProductSerializer(favourite_product, many=True)
        print(serializer)
        return serializer.data


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
    class Meta:
        model = RatingAndReview
        fields = ['user', 'product', 'date', 'content', 'rating']

    def create(self, validated_data):
        rating_and_review = RatingAndReview.objects.create(user=validated_data['user'],
                                                           product=validated_data['product'], date=validated_data['date'], content=validated_data['content'], rating=validated_data['rating'])
        rating_and_review.save()
        return rating_and_review


# --------- Rating and Review Serializer
class QuestionAndAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionAndAnswer
        fields = "__all__"
        depth = 1

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation.pop("product")
        representation.pop("user")

        return representation

    def create(self, validated_data):
        question_and_answer = QuestionAndAnswer.objects.create(
            user=validated_data["user"], product=validated_data['product'], date=validated_data['date'], question=validated_data['question'], answer=validated_data['answer'])
        question_and_answer.save()
        return question_and_answer


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
