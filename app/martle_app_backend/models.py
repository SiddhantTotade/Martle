from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
import uuid
from .manager import *
from django.conf import settings
from django_countries.fields import CountryField
from django.urls import reverse
from django.utils.text import slugify
import random
import string


# Create your models here.
def generate_random_string():
    str = "".join(random.choices(string.ascii_lowercase, k=20))
    return str


# States of countrycity = validated_data['city'],
STATE_CHOICES = (("Andhra Pradesh", "Andhra Pradesh"), ("Arunachal Pradesh ", "Arunachal Pradesh "), ("Assam", "Assam"), ("Bihar", "Bihar"), ("Chhattisgarh", "Chhattisgarh"), ("Goa", "Goa"), ("Gujarat", "Gujarat"), ("Haryana", "Haryana"), ("Himachal Pradesh", "Himachal Pradesh"), ("Jammu and Kashmir ", "Jammu and Kashmir "), ("Jharkhand", "Jharkhand"), ("Karnataka", "Karnataka"), ("Kerala", "Kerala"), ("Madhya Pradesh", "Madhya Pradesh"), ("Maharashtra", "Maharashtra"), ("Manipur", "Manipur"), ("Meghalaya", "Meghalaya"), ("Mizoram", "Mizoram"), ("Nagaland", "Nagaland"), ("Odisha", "Odisha"),
                 ("Punjab", "Punjab"), ("Rajasthan", "Rajasthan"), ("Sikkim", "Sikkim"), ("Tamil Nadu", "Tamil Nadu"), ("Telangana", "Telangana"), ("Tripura", "Tripura"), ("Uttar Pradesh", "Uttar Pradesh"), ("Uttarakhand", "Uttarakhand"), ("West Bengal", "West Bengal"), ("Andaman and Nicobar Islands", "Andaman and Nicobar Islands"), ("Chandigarh", "Chandigarh"), ("Dadra and Nagar Haveli", "Dadra and Nagar Haveli"), ("Daman and Diu", "Daman and Diu"), ("Lakshadweep", "Lakshadweep"), ("National Capital Territory of Delhi", "National Capital Territory of Delhi"), ("Puducherry", "Puducherry"))


# Product choices
CATEGORY_CHOICES = (('M', 'Mobile'), ('L', 'Laptop'),
                    ('TW', 'Top Wear'), ('BW', 'Bottom Wear'), ('W', 'Watch'),
                    ('P', 'Printer'), ('F', 'Fan'), ('EB', 'Earbuds'),
                    ('C', 'Camera'), ('O', 'Oil'), ('SH', 'Shower'), ('MU', 'Museli'), ('CL', 'Cleaner'), ('CA', 'Computer and Accessories'))


# Product status
STATUS_CHOICES = (('Accepted', 'Accepted'), ('Packed', 'Packed'),
                  ('On the way', 'On the way'), ('Delivered', 'Delivered'), ('Cancel', 'Cancel'), ('Applied for return', 'Applied for return'), ('Returned', 'Returned'))


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
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)
    address = models.CharField(default=None, max_length=50)
    locality = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    state = models.CharField(choices=STATE_CHOICES, max_length=50)
    zipcode = models.IntegerField()
    country = CountryField()

    def __str__(self):
        return (str(self.id) + " - " + str(self.name) + " - " + str(self.user))

    def get_absolute_url(self):
        return reverse('address')


# --------- Product Model
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    product_title = models.CharField(max_length=200)
    product_selling_price = models.FloatField()
    product_discounted_price = models.FloatField()
    product_description = models.TextField()
    product_details = models.TextField()
    product_brand = models.CharField(max_length=50)
    product_category = models.CharField(choices=CATEGORY_CHOICES, max_length=5)
    product_slug = models.SlugField(null=True, blank=True)

    def save(self, *args, **kwargs):
        self.product_slug = slugify(self.product_title) + generate_random_string()
        return super().save(*args, **kwargs)

    def __str__(self):
        return str(self.id)


# --------- Product Image Model
class ProductImage(models.Model):
    product_image = models.ForeignKey(
        Product, default=None, on_delete=models.CASCADE, related_name='product_images')
    product_image_url = models.CharField(
        max_length=500, default=None, null=True, blank=True)
    product_img_file = models.ImageField(upload_to='product_images')

    def __str__(self):
        return str(self.product_image.id) + " - " + str(self.product_image.product_title)


# --------- Cart Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveBigIntegerField(default=1)

    def __str__(self):
        return str(self.id)

    @property
    def total_cost(self):
        return self.quantity * self.product.product_discounted_price


# --------- Placed Order Model
class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    ordered_date = models.DateField()
    status = models.CharField(
        max_length=50, choices=STATUS_CHOICES, default='Pending')

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
