from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Recommendation
from .serializers import UserInteractionSerializer, RecommendationSerializer


class UserInteractionView(APIView):
    def post(self, request):
        try:
            user_interaction_serializer = UserInteractionSerializer(
                data=request.data)

            if user_interaction_serializer.is_valid():
                user_interaction_serializer.save()
                return Response(status=status.HTTP_201_CREATED)
            else:
                return Response(status=status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RecommendProductView(APIView):
    def get(self, request):
        try:
            products = Recommendation.objects.filter(user=request.user.id)

            recommend_serializer = RecommendationSerializer(
                products, many=True)

            return Response(recommend_serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
