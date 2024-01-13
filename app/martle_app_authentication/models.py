from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
# Create your models here.


class UserManager(BaseUserManager):
    def create_user(self, email, name, tc, password=None, password2=None):
        if not email:
            raise ValueError("Admin must have an email address")

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            tc=tc
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, tc, password=None, password2=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
            tc=tc
        )

        user.is_admin = True
        user.save(using=self._db)

        return user


# User Authentication Models
class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='Email Address', max_length=255, unique=True)
    name = models.CharField(max_length=255)
    tc = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'tc']

    def __str__(self):
        return str(self.id)

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


# --------- Customer Model
class CustomerAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(default=None, max_length=255)
    locality = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=50, blank=True, null=True)
    zipcode = models.IntegerField()
    country = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=False)

    def __str__(self):
        return (str(self.id) + " - " + str(self.name) + " - " + str(self.user))

    def get_absolute_url(self):
        return reverse('address')
