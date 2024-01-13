from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from rest_framework import serializers
from .models import User, CustomerAddress
from .utils import Util
from .helpers import send_otp_to_mobile


class UserRegistrationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(
        style={'input-type': 'password'}, write_only=True
    )

    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'password2', 'tc']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        if password != password2:
            raise serializers.ValidationError(
                "Password and Confirm Password is not matching")
        return attrs

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


# User login serilaizer
class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        model = User
        fields = ['email', 'password']


# User profile serializer
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


# User change password serializer
class UserChangePasswordSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={'input-type': 'password'}, write_only=True)
    password2 = serializers.CharField(
        max_length=255, style={'input-type': 'password2'}, write_only=True)

    class Meta:
        models = User
        fields = ['password', 'password2']

    def validate(self, attrs):
        password = attrs.get('password')
        password2 = attrs.get('password2')

        user = self.context.get('user')

        if password != password2:
            raise serializers.ValidationError(
                'Password and Confirm Password is not matching')

        user.set_password(password)
        user.save()

        return attrs


# User reset password email
class UserSendPasswordResetEmailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)

    class Meta:
        fields = ['email']

    def validate(self, attrs):
        email = attrs.get('email')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            link = f'http://localhost:3000/api/user/reset-password/{uid}/{token}'
            body = f'Click on the link to reset password - {link}'
            data = {
                'email_subject': 'Reset your password',
                'email_body': body,
                'to_email': user.email
            }

            Util.send_mail(data)

            return attrs
        else:
            return serializers.ValidationError("You are not a registered user")


# User passwrd reset
class UserPasswordResetSerializer(serializers.Serializer):
    password = serializers.CharField(
        max_length=255, style={'input_type': 'password'}, write_only=True
    )
    password2 = serializers.CharField(
        max_length=255, style={'input_type': 'password2'}, write_only=True
    )

    class Meta:
        models = User
        fields = ['password', 'password2']

    def validate(self, attrs):
        try:
            password = attrs.get('password')
            password2 = attrs.get('password2')
            uid = self.context.get('uid')
            token = self.context.get('token')

            if password != password2:
                raise serializers.ValidationError("Password does not matching")

            id = smart_str(urlsafe_base64_decode(uid))
            user = User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError("Token is not valid")

            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as identifier:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError("Token is not valid")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'password', 'phone']

    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'], phone=validated_data['phone'])
        user.set_password(validated_data['password'])
        user.save()
        send_otp_to_mobile(user.phone, user)
        return user


# --------- Customer Serializer
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerAddress
        fields = '__all__'

    def create(self, validated_data):
        customer = CustomerAddress.objects.create(user=validated_data['user'], name=validated_data['name'], address=validated_data['address'], locality=validated_data['locality'],
                                                  city=validated_data['city'], state=validated_data['state'], country=validated_data['country'], zipcode=validated_data['zipcode'])
        customer.save()
        return customer
