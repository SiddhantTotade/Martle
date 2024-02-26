from django.db.models.signals import post_save
from django.dispatch import receiver
from martle_app_authentication.models import User
from .models import Martlet


@receiver(post_save, sender=User)
def create_martlet_entry(sender, instance, created, **kwargs):
    if created:
        Martlet.objects.create(user=instance)
