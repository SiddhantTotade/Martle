from rest_framework import serializers
from martle_app_backend.models import OrderPlaced
from .models import Martlet


class MartletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Martlet
        fields = "__all__"


class OrderPlacedSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderPlaced
        fields = "__all__"
