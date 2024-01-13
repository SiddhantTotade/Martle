from django.contrib import admin
from .models import CustomerAddress, User
# Register your models here.


# -------- User Admin
@admin.register(User)
class UserModelAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]


# -------- Customer Admin
@admin.register(CustomerAddress)
class CustomerModelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'address', 'locality',
                    'city', 'state', 'zipcode', 'country']
