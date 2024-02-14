from django.contrib import admin
from .models import UserInteraction, Recommendation
# Register your models here.


@admin.register(UserInteraction)
class UserInteractionAdmin(admin.ModelAdmin):
    list_display = ['user', 'interaction_type', 'timestamp']


@admin.register(Recommendation)
class RecommendationAdmin(admin.ModelAdmin):
    list_display = ['user']
