from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django_countries import countries

# Create your views here.

def home(request):
    for code ,name in countries:
        print(f"{code} ({name})")
    return JsonResponse("Good to gooo..",safe=False)