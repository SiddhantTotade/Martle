from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from .models import *
from django.core import serializers as customer_data_serializer
from .serializers import *

# Create your views here.

def home(request):
    return JsonResponse("Good to gooo..",safe=False)


class ProductView(APIView):
    def get(self, request):
        # getting all products
        product = Product.objects.all()

        # checking products exist or not
        if product: 
            product_serializer = ProductSerializer(product, many = True)
            return JsonResponse(product_serializer.data, safe = False)
        return JsonResponse("No Product in database",safe = False)

    def post(self, request):
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data = product_data)

        # saving customer data
        if product_serializer.is_valid():
            product_serializer.save()
            return JsonResponse("Product added successfully", safe = False)
        return JsonResponse("Failed to add product",safe = False)

    def put(self, request):
        print("PUT")
        return JsonResponse("PUT Method Called", safe=False)

    def delete(self, request):
        print("DELETE")
        return JsonResponse("DELETE Method Called", safe=False)



class CustomerView(APIView):
    def get(self, request, pk):

        #getting customers by id
        customer = Customer.objects.all()

        # checking customer exist or not
        if customer:
            customer_serializer = customer_data_serializer.serialize('json', customer)
            return JsonResponse(customer_serializer, safe = False)
        return JsonResponse("No customer found",safe = False)

    def post(self, request):
        customer_data = JSONParser().parse(request)
        customer_serializer = CustomerSerializer(data = customer_data)
        print("Not Valid")
        print(customer_serializer)

        # saving customer data
        if customer_serializer.is_valid():
            print("Valid")
            customer_serializer.save()
            return JsonResponse("Customer added successfully", safe = False)
        return JsonResponse("Failed to add customer",safe = False)