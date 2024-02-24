from django.contrib import admin
from .models import Martlet
# Register your models here.


class MartletAdmin(admin.ModelAdmin):
    list_display = ("user", "martle_pay", "martle_bank")


admin.site.register(Martlet, MartletAdmin)
