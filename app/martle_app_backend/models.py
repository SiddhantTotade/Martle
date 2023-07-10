from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .manager import *
from django.conf import settings
from django.urls import reverse
from django.utils.text import slugify
import random
import string


# Create your models here.
def generate_random_string():
    str = "".join(random.choices(string.ascii_lowercase, k=20))
    return str


# User authentication model
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
    is_active = models.BooleanField(default=True)
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


# Project Models

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


# Product Category Choices Model
class ProductCategoryChoices(models.Model):
    product_category = models.CharField(
        max_length=255, blank=True, null=True, unique=True)

    def __str__(self):
        return str(self.product_category)

    def save(self, *args, **kwargs):
        self.product_category = self.product_category.replace(" ", "").lower()
        return super().save(*args, **kwargs)


# Product Status Choices Model
class ProductStatusChoices(models.Model):
    product_status = models.CharField(
        max_length=255, blank=True, null=True, unique=True)

    def __str__(self):
        return str(self.product_status)

    def save(self, *args, **kwargs):
        self.product_status = self.product_status.lower()
        return super().save(*args, **kwargs)


# --------- Product Brand Model
class Brands(models.Model):
    brand_image = models.ImageField(upload_to="brand_images")
    brand_name = models.CharField(max_length=255, null=True, blank=True)
    brand_slug = models.SlugField(
        max_length=300, null=True, blank=True, unique=True)

    def save(self, *args, **kwargs):
        self.brand_slug = self.brand_slug.replace(" ", "").lower()
        return super().save(*args, **kwargs)


# --------- Product Model
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    product_title = models.CharField(max_length=200)
    product_selling_price = models.FloatField()
    product_discounted_price = models.FloatField()
    product_description = models.TextField()
    product_details = models.TextField()
    product_brand = models.ForeignKey(Brands, on_delete=models.PROTECT)
    product_category = models.ForeignKey(
        ProductCategoryChoices, on_delete=models.PROTECT)
    product_slug = models.SlugField(max_length=300, null=True, blank=True)
    product_cover_image = models.ImageField(
        upload_to="product_cover_images", default=None, null=True)

    def save(self, *args, **kwargs):
        self.product_slug = slugify(
            self.product_title) + generate_random_string()
        return super().save(*args, **kwargs)

    def __str__(self):
        return str(self.id)


# --------- Product Image Model
class ProductImage(models.Model):
    product_image = models.ForeignKey(
        Product, default=None, on_delete=models.CASCADE, related_name='product_images')
    product_image_url = models.CharField(
        max_length=500, default=None, null=True, blank=True)
    product_img_file = models.ImageField(upload_to='product_inner_images')

    def __str__(self):
        return str(self.product_image.id) + " - " + str(self.product_image.product_title)


# --------- Cart Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveBigIntegerField(default=1)

    def __str__(self):
        return str(self.id)

    @property
    def total_cost(self):
        return self.quantity * self.product.product_discounted_price


# --------- Placed Order Model
class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomerAddress, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField(default=1)
    ordered_datetime = models.DateTimeField(default=None)
    status = models.ForeignKey(ProductStatusChoices, on_delete=models.PROTECT)

    @property
    def total_cost(self):
        return self.quantity * self.product.product_discounted_price


# --------- Comment Model
class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    content = models.TextField()

    def __str__(self):
        return self.user.username
