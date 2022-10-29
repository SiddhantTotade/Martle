from .models import *
from .helpers import *
from rest_framework import serializers


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','password','phone']

    def create(self, validated_data):
        user = User.objects.create(email = validated_data['email'],phone = validated_data['phone'])
        user.set_password(validated_data['password'])
        user.save()
        send_otp_to_mobile(user.phone,user)
        return user



# Project Serializer

# --------- Customer Serializer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

    def create(self, validated_data):
        customer = Customer.objects.create(user=validated_data['user'],name=validated_data['name'], address=validated_data['address'], locality=validated_data['locality'], city = validated_data['city'],state = validated_data['state'], country = validated_data['country'], zipcode = validated_data['zipcode'])
        customer.save()
        return customer

# --------- Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    def create(self, validated_data):
        product = Product.objects.create(product_title=validated_data['product_title'], product_selling_price=validated_data['product_selling_price'], product_discounted_price=validated_data['product_discounted_price'], product_description = validated_data['product_description'], product_details = validated_data['product_details'], product_brand = validated_data['product_brand'], product_category = validated_data['product_category'])
        product.save()
        return product


# --------- Cart Serializer
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


# --------- Comment Serializer
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
    
    def create(self, validated_data):
        comment = Comment.objects.create(product = validated_data['product'], date = validated_data['date'], content = validated_data['content'])
        comment.save()
        return comment


# --------- Order Placed Serializer
class OrderPlacedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'