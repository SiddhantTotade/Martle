from django.contrib import admin
from .models import *
from django.urls import reverse
from django.utils.html import format_html
# Register your models here.

# Registering Models
admin.site.register(RatingAndReview)
admin.site.register(Classification)
admin.site.register(QuestionAndAnswer)


##### Classes for registering models #####

# -------- product images admin
class ProductImageAdmin(admin.StackedInline):
    model = ProductImage


# -------- product admin
@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_title', 'product_selling_price',
                    'product_discounted_price', 'product_brand', 'product_category']

    inlines = [ProductImageAdmin]

    class Meta:
        model = Product


@admin.register(ProductImage)
class ProductImgAdmin(admin.ModelAdmin):
    pass


@admin.register(ProductStatusChoices)
class ProductStatusChoicesAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_status']


@admin.register(ProductCategoryChoices)
class ProductCategoryChoicesAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_category']


@admin.register(Brands)
class BrandsAdmin(admin.ModelAdmin):
    list_display = ['id', 'brand_slug']


# -------- Order Placed Admin
@admin.register(OrderPlaced)
class OrderPlacedAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'address', 'product',
                    'quantity', 'ordered_datetime', 'status']


@admin.register(Genders)
class GendersAdmin(admin.ModelAdmin):
    list_display = ['id', 'gender']
