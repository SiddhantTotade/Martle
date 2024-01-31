from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import *
from martle_app_authentication.serializers import CustomerAddressSerializer
from martle_app_authentication.renderers import *
from .models import *
from .serializers import *
# import pandas as pd


# Create your views here.
def get_description(request, pk):
    product_id = Product.objects.get(id=pk)
    product_desc = eval(product_id.product_description)
    return JsonResponse(product_desc, safe=False)


class GetProductBySlug(APIView):
    def get(self, request, slug):
        try:
            product_by_id = Product.objects.filter(product_slug=slug)
            product_serializer = ProductSerializer(product_by_id, many=True)
            return JsonResponse(product_serializer.data, safe=False)
        except Exception as e:
            return JsonResponse({"msg": e}, safe=False)


# Function for description
def upload_description(request):
    pass
    # df = pd.read_excel(
    #     '/home/siddhanttotade/Documents/Docs/Programming/GIT/martle/app/martle_app_backend/data_to_dict.xlsx', index_col=None)
    # key = df['Key'].tolist()
    # val = df['Value'].replace("\\u200e", "", regex=True).tolist()
    # combine = dict(list(zip(key, val)))
    # return JsonResponse(str(combine), safe=False)


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

    def get(self, request, product_categories, *args, **kwargs):
        # getting all products
        category = ProductCategoryChoices.objects.filter(
            product_category__in=product_categories.split(','))
        all_products = Product.objects.filter(
            product_category__in=category).order_by("?")
        serialized_product = ProductLightSerializer(all_products, many=True)
        return Response(serialized_product.data, status=status.HTTP_200_OK)

        # all_products = self.get_all_products()
        # all_brands_products = self.get_all_brands()
        # brand_id = Brands.objects.values_list(
        #     'id', flat=True).order_by('?').first()
        # special_products = self.get_all_products_by_product_brand(brand_id)
        # special_product_brand_name_and_image = Brands.objects.filter(
        #     id=special_products.values().first()['product_brand_id'])
        # wedding_products = self.get_him_products()

        # # checking products exist or not
        # if all_products:
        #     product_serialized_data = ProductLightSerializer(
        #         all_products, many=True)
        #     brand_serialized_data = BrandSerializer(
        #         all_brands_products, many=True)
        #     special_products_serialized_data = SpecialProductSerializer(
        #         special_products, many=True)
        #     special_product_image_and_name_serialized_data = BrandSerializer(
        #         special_product_brand_name_and_image, many=True)
        #     wedding_products_serialized_data = WeddingSerializer(
        #         wedding_products, many=True)
        #     return Response({"product_data": product_serialized_data.data, "brand_data": brand_serialized_data.data, "special_product_data": special_products_serialized_data.data, "special_product_image_and_name": special_product_image_and_name_serialized_data.data, 'wedding_products': wedding_products_serialized_data.data}, status=status.HTTP_200_OK)
        # return JsonResponse("NULL", safe=False)

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


class ProductForPlaceOrder(APIView):
    def get(self, request, slug):
        product = Product.objects.filter(product_slug=slug)
        serialized_product = ProductLightSerializer(product, many=True)

        print(request.user.id)

        address = CustomerAddress.objects.filter(
            user=request.user.id, is_active=True)

        serialized_customer_address = CustomerAddressSerializer(
            address, many=True)

        return Response({"data": serialized_product.data, "address": serialized_customer_address.data}, status=status.HTTP_200_OK)


class BrandView(APIView):
    def get(self, request):
        brand = Brands.objects.all()

        if brand:
            brand_serialized_data = BrandSerializer(brand, many=True)
            return JsonResponse(brand_serialized_data.data, safe=False)
        return JsonResponse("NULL", safe=False)


class CustomerAddressView(APIView):
    def get(self, request):
        # getting customers by id
        customers_address = CustomerAddress.objects.filter(
            user=request.user.id)

        # checking customer exist or not
        if customers_address:
            customer_serializer = CustomerAddressSerializer(
                customers_address, many=True)
            return Response({"data": reversed(customer_serializer.data)}, status=status.HTTP_200_OK)
        return Response("No address found", safe=False)

    # saving customer data
    def post(self, request):
        # getting customer data which is going to be save
        get_customer_address = CustomerAddress.objects.filter(
            user=request.user.id)

        if get_customer_address.count() == 3:
            return Response("User can upload upto three addresses", status=status.HTTP_404_NOT_FOUND)

        customer_serialized_data = CustomerAddressSerializer(
            data=request.data)

        # saving customer data
        if customer_serialized_data.is_valid():
            customer_serialized_data.save()
            return Response("Address added successfully", status=status.HTTP_200_OK)
        return Response("Failed to add address", status=status.HTTP_404_NOT_FOUND)

    # updating customer using pk
    def put(self, request):
        try:
            # Get the existing customer address instance
            address = CustomerAddress.objects.get(id=request.data.get("id"))

        # Initialize the serializer with the existing instance and request data
            updated_address_serializer = CustomerAddressSerializer(
                address, data=request.data)

        # Check if the serializer is valid
            if updated_address_serializer.is_valid():
                # Save the updated data to the existing instance
                updated_address_serializer.save()
                return Response("Address updated successfully", status=status.HTTP_200_OK)
            else:
                return Response(updated_address_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except CustomerAddress.DoesNotExist:
            return Response("Customer address not found", status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
def favorite_add(request, id):
    fav = get_object_or_404(Product, id=id)
    if fav.favourite.filter(id=request.user.id).exists():
        fav.favourite.remove(request.user.id)
    else:
        fav.favourite.add(request.user.id)
    return Response({"msg": "added"}, safe=False)


@csrf_exempt
def favorite_list(request):
    fav = Product.objects.filter(favourite=request.user.id)
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
            cart_serialized_data = CartSerializer(
                data=cart_json_data)
            if cart_serialized_data.is_valid():
                cart_serialized_data.save()
            return Response({"msg": "Added to Cart"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, pk):
        try:
            Cart.objects.get(id=pk).delete()
            return Response({"msg": "Item Removed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RatingsAndReviewsView(APIView):
    def get(self, request, pk):
        try:
            rating_and_review = RatingAndReview.objects.filter(product=pk)
            rating_and_review_serialized_data = RatingAndReviewSerializer(
                rating_and_review, many=True)

            return Response({"data": reversed(rating_and_review_serialized_data.data)}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"msg": e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, pk):
        try:
            user = request.data.get('user')
            product = request.data.get('product')
            date = request.data.get('date')
            review = request.data.get('review')
            rating = request.data.get('rating')

            data = {
                "user": user, "product": product, "date": date, "review": review, "rating": rating}

            rating_and_review_serialized_data = RatingAndReviewSerializer(
                data=data)

            if rating_and_review_serialized_data.is_valid():
                rating_and_review_serialized_data.save()

                return Response({"msg": "Rating submitted"}, status=status.HTTP_200_OK)
            return Response({"error": "Some error occured"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"msg": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class QuestionAndAnswerView(APIView):
    def get(self, request, pk):
        try:
            question_and_answer = QuestionAndAnswer.objects.filter(product=pk)
            question_and_answer_serialized_data = QuestionAndAnswerSerializer(
                question_and_answer, many=True)
            return Response({"msg": question_and_answer_serialized_data.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"msg": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, pk):
        try:
            user = request.data.get('user')
            product = request.data.get('product')
            query = request.data.get('query')

            data = {
                "user": user, "product": product, "query": query}
            question_and_answer_serialized_data = QuestionAndAnswerSerializer(
                data=data)

            if question_and_answer_serialized_data.is_valid():
                question_and_answer_serialized_data.save()

                return Response({"msg": "Question submitted"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"msg": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
