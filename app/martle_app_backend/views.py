from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from .models import *
from .serializers import *
from django.db.models import QuerySet
from django.core import serializers as customer_data_serializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authentication import *
from .renderers import *
import pandas as pd

# Create your views here.


# Generate access and refresh tokens for users
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    }


# User registration view
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        token = get_tokens_for_user(user)
        return Response({'token': token, 'msg': 'Admin registered successfully'}, status=status.HTTP_201_CREATED)


# User login view
class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')

        user = authenticate(email=email, password=password)

        if user is not None:
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg': 'Login success'}, status=status.HTTP_200_OK)
        else:
            return Response({'errors': {'non_fields_errors': ['Email or Password is not valid']}}, status=status.HTTP_404_NOT_FOUND)


# User profile view
class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# User change password view
class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={'user': request.user})

        serializer.is_valid(raise_exception=True)
        return Response({'data': 'Password changed successfully'}, status=status.HTTP_200_OK)


# User send password-reset link view
class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = UserSendPasswordResetEmailSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password reset link has been sent on your e-mail'}, status=status.HTTP_200_OK)


# User password-reset view
class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={'uid': uid, 'token': token})

        serializer.is_valid(raise_exception=True)
        return Response({'msg': 'Password reset successfully'}, status=status.HTTP_200_OK)


def get_description(request, pk):
    product_id = Product.objects.get(id=pk)
    product_desc = eval(product_id.product_description)
    return JsonResponse(product_desc, safe=False)


class GetProductById(APIView):
    def get(self, request, pk):
        product_by_id = Product.objects.filter(pk=pk)
        product_serializer = ProductSerializer(product_by_id, many=True)
        return JsonResponse(product_serializer.data, safe=False)


# Function for description
def upload_description(request):
    df = pd.read_excel(
        '/home/siddhanttotade/Documents/Docs/Programming/GIT/martle/app/martle_app_backend/data_to_dict.xlsx', index_col=None)
    key = df['Key'].tolist()
    val = df['Value'].replace("\\u200e", "", regex=True).tolist()
    combine = dict(list(zip(key, val)))
    return JsonResponse(str(combine), safe=False)


#  Function for image upload
@api_view(['GET', 'POST'])
def SetImageView(request):
    if request.method == 'GET':
        images = ProductImage.objects.all()
        image_serializer = ProductImageSerializer(images, many=True)
        return JsonResponse(image_serializer.data, safe=False)

    elif request.method == "POST":
        product_id = int(request.data['product_image'])
        product_url = request.data['product_image_url']
        product_file = request.FILES.getlist('product_img_file')
        product_new_id = Product.objects.get(id=product_id)

        for file in product_file:
            Product.id = ProductImage.objects.create(
                product_image=product_new_id, product_image_url=product_url, product_img_file=file)
        return JsonResponse("Images Uploaded Successfully", safe=False)


class ProductView(APIView):

    def get_all_products(self) -> QuerySet:
        return Product.objects.select_related(
            'product_category').all().order_by("?")

    def get_all_brands(self) -> QuerySet:
        return Brands.objects.all()[:20]

    def get_all_products_by_product_brand(self, brand_id: QuerySet) -> list:
        return Product.objects.filter(product_brand=brand_id).order_by("?")

    def get_him_products(self) -> QuerySet:
        return Product.objects.select_related('product_gender').filter(product_gender__in=[1, 2]).order_by("?")

    def get(self, request):
        # getting all products
        all_products = self.get_all_products()
        all_brands_products = self.get_all_brands()
        brand_id = Brands.objects.values_list(
            'id', flat=True).order_by('?').first()
        special_products = self.get_all_products_by_product_brand(brand_id)
        special_product_brand_name_and_image = Brands.objects.filter(
            id=special_products.values().first()['product_brand_id'])
        wedding_products = self.get_him_products()

        # checking products exist or not
        if all_products:
            product_serialized_data = ProductLightSerializer(
                all_products, many=True)
            brand_serialized_data = BrandSerializer(
                all_brands_products, many=True)
            special_products_serialized_data = SpecialProductSerializer(
                special_products, many=True)
            special_product_image_and_name_serialized_data = BrandSerializer(
                special_product_brand_name_and_image, many=True)
            wedding_products_serialized_data = WeddingSerializer(
                wedding_products, many=True)
            return Response({"product_data": product_serialized_data.data, "brand_data": brand_serialized_data.data, "special_product_data": special_products_serialized_data.data, "special_product_image_and_name": special_product_image_and_name_serialized_data.data, 'wedding_products': wedding_products_serialized_data.data}, status=status.HTTP_200_OK)
        return JsonResponse("NULL", safe=False)

    def post(self, request):
        # getting product data which is going to be save
        product_json_data = JSONParser().parse(request)
        product_serialized_data = ProductSerializer(data=product_json_data)

        # saving product data
        if product_serialized_data.is_valid():
            product_serialized_data.save()
            return JsonResponse("Product added successfully", safe=False)
        return JsonResponse("Failed to add product", safe=False)

    # updating product using pk
    def put(self, request, pk):
        # getting product data which is going to be update
        product_json_data = JSONParser().parse(request)
        product_by_id = Product.objects.get(pk=pk)
        product_serialized_data = ProductSerializer(
            product_by_id, data=product_json_data)

        # saving customer data
        if product_serialized_data.is_valid():
            product_serialized_data.save()
            return JsonResponse("Product updated successfully", safe=False)
        return JsonResponse("Failed to update product", safe=False)

    # deleting product by pk
    def delete(self, request, pk):
        product_by_id = Product.objects.get(pk=pk)
        product_by_id.delete()
        return JsonResponse("Deleted successfull", safe=False)


class BrandView(APIView):
    def get(self, request):
        brand = Brands.objects.all()

        if brand:
            brand_serialized_data = BrandSerializer(brand, many=True)
            return JsonResponse(brand_serialized_data.data, safe=False)
        return JsonResponse("NULL", safe=False)


class CustomerView(APIView):
    def get(self, request):
        # getting customers by id
        all_customers = CustomerAddress.objects.all()

        # checking customer exist or not
        if all_customers:
            customer_serializer = customer_data_serializer.serialize(
                'json', all_customers)
            return JsonResponse(customer_serializer, safe=False)
        return JsonResponse("No customer found", safe=False)

    # saving customer data
    def post(self, request):
        # getting customer data which is going to be save
        customer_json_data = JSONParser().parse(request)
        customer_serialized_data = CustomerSerializer(data=customer_json_data)

        # saving customer data
        if customer_serialized_data.is_valid():
            customer_serialized_data.save()
            return JsonResponse("Customer added successfully", safe=False)
        return JsonResponse("Failed to add customer", safe=False)

    # updating customer using pk
    def put(self, request, pk):
        # getting customer modified data which is going to be update
        customer_json_data = JSONParser().parse(request)
        customer_by_id = CustomerAddress.objects.get(pk=pk)
        customer_serialized_data = CustomerSerializer(
            customer_by_id, data=customer_json_data)

        # saving customer data
        if customer_serialized_data.is_valid():
            customer_serialized_data.save()
            return JsonResponse("Customer updated successfull", safe=False)
        return JsonResponse("Failed to update customer", safe=False)

    # deleting customer by pk
    def delete(self, request, pk):
        customer_by_id = CustomerAddress.objects.get(pk=pk)
        customer_by_id.delete()
        return JsonResponse("Customer deleted successfull", safe=False)


@csrf_exempt
def favorite_add(request, id):
    fav = get_object_or_404(Product, id=id)
    if fav.favourite.filter(id=request.user.id).exists():
        print("Hello")
        fav.favourite.remove(request.user.id)
    else:
        print("Bello")
        fav.favourite.add(request.user.id)
    return Response({"msg": "added"}, safe=False)


@csrf_exempt
def favorite_list(request):
    fav = Product.objects.filter(favourite=request.user.id)
    print(fav)
    return HttpResponse({"fav": fav}, status.HTTP_200_OK)


class FavoriteView(APIView):
    def get(self, request):
        try:
            all_favorite_products = Product.objects.filter(
                favourite=request.user.id)
            favorite_serialized_data = FavoriteProductSerializer(
                all_favorite_products, many=True)
            return JsonResponse(favorite_serialized_data.data, safe=False)
        except Exception as e:
            return JsonResponse({"error": e}, safe=False)

    def post(self, request):
        try:
            fav = get_object_or_404(Product, id=id)
            if fav.favourite.filter(id=request.user.id).exists():
                fav.favourite.remove(request.user.id)
            else:
                fav.favourite.add(request.user.id)
            return Response({"msg": "added"}, safe=False)
            # favorite_json_data = JSONParser().parse(request)
            # favorite_serilized_data = FavoriteProductSerializer(
            #     data=favorite_json_data)
            # if favorite_serilized_data.is_valid():
            #     favorite_serilized_data.save()
            # return Response({"msg": "Added to Favorites"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id, pk):
        try:
            Product.objects.get(favorite=id).delete()
            return Response({"msg": "Item Removed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# -----------> Items add to cart
class CartView(APIView):
    def get(self, request):
        all_cart_products = Cart.objects.filter(user=request.user.id)
        cart_serialized_data = CartSerializer(all_cart_products, many=True)
        return JsonResponse(cart_serialized_data.data, safe=False)

    def post(self, request):
        try:
            cart_json_data = JSONParser().parse(request)
            cart_serilized_data = CartSerializer(
                data=cart_json_data)
            if cart_serilized_data.is_valid():
                cart_serilized_data.save()
            return Response({"msg": "Added to Cart"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, pk):
        try:
            Cart.objects.get(id=pk).delete()
            return Response({"msg": "Item Removed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
