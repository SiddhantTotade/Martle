from django.db import models
from django.urls import reverse
from .manager import UserManager
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email Address',
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    tc = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'tc']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class CustomerAddress(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='addresses')
    address = models.CharField(default=None, max_length=255)
    locality = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=50, blank=True, null=True)
    zipcode = models.IntegerField()
    country = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return (str(self.id) + " - " + str(self.user))

    def get_absolute_url(self):
        return reverse('address')
