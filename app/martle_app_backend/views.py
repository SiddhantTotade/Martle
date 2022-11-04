from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from django.core import serializers as customer_data_serializer
from django.core.files.storage import default_storage
from .models import *
from .serializers import *
from rest_framework.decorators import api_view

# Create your views here.

@csrf_exempt
def saveFile(request):
    file = request.FILES['product_image']
    file_name = default_storage.save(file)
    return JsonResponse(file_name,safe = False)

class SetImageView(APIView):
    def get(self, request, pk):
        product_image = ProductImage.objects.all()
        # product_image_serializer = ProductImageSerializer(product_image, many = True)

        if product_image:
            product_image_data = ProductImageSerializer(product_image, many = True)
            return JsonResponse(product_image_data.data, safe=False)
        return JsonResponse("Problem",safe=False)

class ProductView(APIView):
    def get(self, request):
        # getting all products
        all_products = Product.objects.all()

        # checking products exist or not
        if all_products: 
            product_serialized_data = ProductSerializer(all_products, many = True)
            return JsonResponse(product_serialized_data.data, safe = False)
        return JsonResponse("No Product in database",safe = False)

    def post(self, request):
        # getting product data which is going to be save
        product_json_data = JSONParser().parse(request)
        product_serialized_data = ProductSerializer(data = product_json_data)
        print(product_serialized_data)


        # saving product data
        if product_serialized_data.is_valid():
            product_serialized_data.save()
            return JsonResponse("Product added successfully", safe = False)
        return JsonResponse("Failed to add product",safe = False)

    # updating product using pk
    def put(self, request, pk):
        # getting product data which is going to be update
        product_json_data = JSONParser().parse(request)
        product_by_id = Product.objects.get(pk = pk)
        product_serialized_data = ProductSerializer(product_by_id, data = product_json_data)

        # saving customer data
        if product_serialized_data.is_valid():
            product_serialized_data.save()
            return JsonResponse("Product updated successfull", safe = False)
        return JsonResponse("Failed to update product", safe = False)

    # deleting product by pk
    def delete(self, request, pk):
        product_by_id = Product.objects.get(pk = pk)
        product_by_id.delete()
        return JsonResponse("Deleted successfull", safe = False)



class CustomerView(APIView):
    def get(self, request):

        #getting customers by id
        all_customers = Customer.objects.all()

        # checking customer exist or not
        if all_customers:
            customer_serializer = customer_data_serializer.serialize('json', all_customers)
            return JsonResponse(customer_serializer, safe = False)
        return JsonResponse("No customer found",safe = False)


    # saving customer data
    def post(self, request):
        # getting customer data which is going to be save
        customer_json_data = JSONParser().parse(request)
        customer_serialized_data = CustomerSerializer(data = customer_json_data)

        # saving customer data
        if customer_serialized_data.is_valid():
            customer_serialized_data.save()
            return JsonResponse("Customer added successfully", safe = False)
        return JsonResponse("Failed to add customer",safe = False)

    # updating customer using pk
    def put(self, request, pk):
        # getting customer modified data which is going to be update
        customer_json_data = JSONParser().parse(request)
        customer_by_id = Customer.objects.get(pk = pk)
        customer_serialized_data = CustomerSerializer(customer_by_id, data = customer_json_data)

        # saving customer data
        if customer_serialized_data.is_valid():
            customer_serialized_data.save()
            return JsonResponse("Customer updated successfull", safe = False)
        return JsonResponse("Failed to update customer", safe = False)

    # deleting customer by pk
    def delete(self, request, pk):
        customer_by_id = Customer.objects.get(pk = pk)
        customer_by_id.delete()
        return JsonResponse("Customer deleted successfull", safe = False)