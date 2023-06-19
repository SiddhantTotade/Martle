from django.contrib import admin
from .models import *
from django.urls import reverse
from django.utils.html import format_html
# Register your models here.

# Registering Models
admin.site.register(User)
admin.site.register(ProductCategoryChoices)
admin.site.register(ProductStatusChoices)
admin.site.register(Comment)


# Classes for registering models


# -------- Customer Admin
@admin.register(Customer)
class CustomerModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'name', 'address', 'locality', 'city', 'state', 'zipcode', 'country']


# -------- Product Images Admin
class ProductImageAdmin(admin.StackedInline):
    model = ProductImage


# -------- Product Admin
@admin.register(Product)
class ProductModelAdmin(admin.ModelAdmin):
    list_display = ['id','product_title', 'product_selling_price', 'product_discounted_price', 'product_description', 'product_details', 'product_brand', 'product_category']

    inlines = [ProductImageAdmin]

    class Meta:
        model = Product


@admin.register(ProductImage)
class ProductImgAdmin(admin.ModelAdmin):
    pass


# -------- Cart Admin
@admin.register(Cart)
class CartModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'product', 'quantity']


# -------- Order Placed Admin
@admin.register(OrderPlaced)
class OrderPlacedAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'customer', 'customer_info', 'product', 'product_info', 'quantity', 'ordered_date', 'status']

    def customer_info(self,obj):
        link = reverse("admin:app_customer_change",args = [obj.customer.pk])
        return format_html('<a href="{}">{}</a>', link, obj.customer.name)
    
    def product_info(self,obj):
        link = reverse("admin:app_product_change",args = [obj.product.pk])
        return format_html('<a href="{}">{}</a>', link, obj.product.name)