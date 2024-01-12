from rest_framework.response import Response
from rest_framework.views import APIView
from martle_app_backend.models import *
from martle_app_backend.serializers import *
from .helpers import *


class RegisterView(APIView):
    def post(self, request):
        try:
            serializer = UserSerializer(data=request.data)

            if not serializer.is_valid():
                return Response({
                    'status': 403,
                    'errors': serializer.errors
                })
            serializer.save()
            return Response({
                'status': 200,
                'message': 'An OTP is sent on your e-mail and phone'
            })
        except Exception as e:
            print(e)
            return Response({
                'status': 404,
                'message': 'Something went wrong'
            })


class VerifyOTP(APIView):
    def post(self, request):
        try:
            data = request.data
            user_obj = User.objects.get(phone=data.get('phone'))
            otp = data.get('otp')

            if user_obj.otp == otp:
                user_obj.is_phone_verified = True
                user_obj.save()
                return Response({
                    'status': 200,
                    'message': 'Your OTP is verified'
                })
            return Response({
                'status': 403,
                'message': 'Your OTP is wrong. Please insert correct OTP. hint -: OTP is sent on your e-mail and phone'
            })

        except Exception as e:
            print(e)
            return Response({
                'status': 404,
                'message': 'Something went wrong'
            })

    def patch(self, request):
        try:
            data = request.data
            user_obj = User.objects.filter(phone=data.get('phone'))
            if not user_obj.exists():
                return Response({
                    'status': 404,
                    'error': 'No user found'
                })

            status, time = send_otp_to_mobile(data.get('phone'), user_obj[0])

            if status:
                return Response({
                    'status': 200,
                    'message': 'A new OTP is sent on your number'
                })
            return Response({
                'status': 404,
                'message': f'Try after {time} seconds'
            })

        except Exception as e:
            return Response({
                'status': 404,
                'error': 'Something went wrong'
            })
