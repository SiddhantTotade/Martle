from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from django.core import serializers as customer_data_serializer
from django.http.response import JsonResponse
from django.contrib.auth.tokens import default_token_generator
from django.conf import settings
from django.utils.encoding import force_str

from urllib.parse import urlencode

from martle_app_backend.models import *
from martle_app_payment.models import Martlet

from .serializers import *
from .renderers import UserRenderer
from .helpers import *
from .utils import Util


# Generate access and refresh tokens for users
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token)
    }


# Create your views here.
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()
        response = Response()

        uidb64 = urlsafe_base64_encode(force_bytes(user.id))
        token = default_token_generator.make_token(user)

        params = urlencode({'uidb64': uidb64, 'token': token})

        absolute_url = f"{request.scheme}://127.0.0.1:8000/auth/verify/?{params}"

        data = {
            'email_subject': 'Verify your account',
            'email_body': f"Click on the url to verify email.\n{absolute_url}",
            'to_email': user.email
        }

        Util.send_mail(data)

        token = get_tokens_for_user(user)

        access_token = response.data.get("access")
        refresh_token = response.data.get("refresh")

        response.set_cookie("access", access_token, max_age=settings.AUTH_COOKIE_MAX_AGE, path=settings.AUTH_COOKIE_PATH,
                            secure=settings.AUTH_COOKIE_SECURE, httponly=settings.AUTH_COOKIE_HTTP_ONLY, samesite=settings.AUTH_COOKIE_SAMESITE)

        response.set_cookie("refresh", refresh_token, max_age=settings.AUTH_COOKIE_MAX_AGE, path=settings.AUTH_COOKIE_PATH,
                            secure=settings.AUTH_COOKIE_SECURE, httponly=settings.AUTH_COOKIE_HTTP_ONLY, samesite=settings.AUTH_COOKIE_SAMESITE)

        return response


# User login view
class UserLoginView(TokenObtainPairView):
    # renderer_classes = [UserRenderer]

    def post(self, request, *args, **kwargs):
        try:
            response = super().post(request, *args, **kwargs)

            if response.status_code == 200:
                access_token = response.data.get("access")
                refresh_token = response.data.get("refresh")

                response.set_cookie("access", access_token, max_age=settings.SIMPLE_JWT["AUTH_COOKIE_MAX_AGE"],   path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
                                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"], httponly=settings.  SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"], samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"])

                response.set_cookie("refresh", refresh_token, max_age=settings.SIMPLE_JWT["AUTH_COOKIE_MAX_AGE"],   path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
                                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"], httponly=settings.  SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"], samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"])

            return response
        except:
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


# user password-reset view
class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        try:
            refresh_token = request.COOKIES.get("refresh")

            serializer = LogoutSerializer(data={"refresh": refresh_token})
            serializer.is_valid(raise_exception=True)
            serializer.save()

            response = Response(status=status.HTTP_204_NO_CONTENT)

            response.set_cookie("access", None, max_age=settings.SIMPLE_JWT["AUTH_COOKIE_MAX_AGE"],   path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
                                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"], httponly=settings.  SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"], samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"])

            response.set_cookie("refresh", None, max_age=settings.SIMPLE_JWT["AUTH_COOKIE_MAX_AGE"],   path=settings.SIMPLE_JWT["AUTH_COOKIE_PATH"],
                                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"], httponly=settings.  SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"], samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"])

            return response
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class TokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        refresh_token = request.COOKIES.get("refresh")

        if refresh_token:
            request.data["refresh"] = refresh_token

        response = super().post(request, *args, **kwargs)

        if response.status_code == 200:
            access = response.data.get("access")

            response.set_cookie("access", access, max_age=settings.AUTH_COOKIE_MAX_AGE, path=settings.AUTH_COOKIE_PATH,
                                secure=settings.AUTH_COOKIE_SECURE, httponly=settings.AUTH_COOKIE_HTTP_ONLY, samesite=settings.AUTH_COOKIE_SAMESITE)

        return response


class VerifyTokenView(APIView):
    renderer_classes = [UserRenderer]

    def get(self, request, format=None):
        try:
            uidb64 = request.GET.get('uidb64')
            token = request.GET.get('token')

            # Decode the UID and check the token
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)

            if user.is_active == False:
                if default_token_generator.check_token(user, token):
                    # Mark the user as active
                    user.is_active = True
                    user.save()

                    # Redirect to a success page or return a success message
                    return Response({"msg": "Verified successfully"}, status=status.HTTP_200_OK)
            else:
                # Token is not valid, redirect to an error page or return an error message
                return Response({'error_message': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Handle exceptions, redirect to an error page or return an error message
            return Response({'error_message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


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
        customer_serialized_data = CustomerAddressSerializer(
            data=customer_json_data)

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
        customer_serialized_data = CustomerAddressSerializer(
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
