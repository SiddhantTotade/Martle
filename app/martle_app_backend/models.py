import random
import string
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from martle_app_authentication.manager import *
from django.conf import settings
from django.urls import reverse
from django.utils.text import slugify
from martle_app_authentication.models import User, CustomerAddress
from taggit.managers import TaggableManager


# Create your models here.
def generate_random_string():
    str = "".join(random.choices(string.ascii_lowercase, k=20))
    return str


# Project Models

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

    def __str__(self):
        return str(self.brand_name)

    def save(self, *args, **kwargs):
        self.brand_slug = self.brand_name.replace(" ", "").lower()
        return super().save(*args, **kwargs)


class Genders(models.Model):
    gender = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self) -> str:
        return self.gender

    def save(self, *args, **kwargs):
        self.gender = self.gender.lower()
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
    product_gender = models.ForeignKey(Genders, on_delete=models.PROTECT)
    favorite = models.ManyToManyField(
        User, blank=True, default=None, related_name="favorite_items")
    cart = models.ManyToManyField(
        User, blank=True, default=None, related_name="cart_items")
    product_tags = TaggableManager()
    product_view_count = models.IntegerField(default=0)
    product_purchase_count = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.pk:
            self.product_slug = slugify(
                self.product_title) + generate_random_string()
        return super().save(*args, **kwargs)

    def __str__(self):
        return str(self.id)

    def get_product_tags(self):
        return [tag.name for tag in self.product_tags.all()]


# --------- Product Image Model
class ProductImage(models.Model):
    product_image = models.ForeignKey(
        Product, default=None, on_delete=models.CASCADE, related_name='product_images')
    product_image_url = models.CharField(
        max_length=500, default=None, null=True, blank=True)
    product_img_file = models.ImageField(upload_to='product_inner_images')

    def __str__(self):
        return str(self.product_image.id) + " - " + str(self.product_image.product_title)


# --------- Order Placed Model
class OrderPlaced(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.ForeignKey(CustomerAddress, on_delete=models.PROTECT)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField(default=1)
    product_discounted_price = models.FloatField(null=True, blank=True)
    product_selling_price = models.FloatField(null=True, blank=True)
    payment_method = models.CharField(max_length=20, null=True, blank=True)
    ordered_datetime = models.DateTimeField(auto_now_add=True)
    status = models.ForeignKey(ProductStatusChoices, on_delete=models.PROTECT)
    order_slug = models.SlugField(max_length=300, null=True, blank=True)

    @property
    def total_cost(self):
        return self.quantity * self.product_discounted_price

    def save(self, *args, **kwargs):
        if not self.pk:
            self.order_slug = self.product.product_slug + generate_random_string()
        return super().save(*args, **kwargs)


# --------- Ratings and Reviews Model
class RatingAndReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    review = models.TextField()
    rating = models.DecimalField(
        null=True, blank=True, max_digits=5, decimal_places=1)

    def __str__(self):
        return self.user.email


# --------- Classification Model
class Classification(models.Model):
    product = models.ForeignKey(RatingAndReview, on_delete=models.CASCADE)
    classified_result = models.IntegerField()

    def __str__(self) -> int:
        return str(self.classified_result)


# --------- Question and Answer Model
class QuestionAndAnswer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    query = models.TextField()
    reply = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.email
