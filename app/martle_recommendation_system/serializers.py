from django.utils import timezone
from rest_framework import serializers
from .models import UserInteraction, Recommendation
from martle_app_backend.serializers import ProductLightSerializer


class UserInteractionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInteraction
        fields = "__all__"

    def create(self, validated_data):
        interaction = UserInteraction.objects.filter(
            user=validated_data['user'], product=validated_data['product'], interaction_type=validated_data['interaction_type']).first()

        if interaction:
            interaction.timestamp = timezone.now()
            interaction.save()
            return interaction
        else:
            return super().create(validated_data)


class RecommendationSerializer(serializers.ModelSerializer):
    recommend_products = ProductLightSerializer(read_only=True, many=True)

    class Meta:
        model = Recommendation
        fields = "__all__"
