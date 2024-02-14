from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save

from martle_app_backend.models import Product
from martle_app_authentication.models import User


class UserInteraction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    interaction_type = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return str(self.user)


class Recommendation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    recommend_products = models.ManyToManyField(
        Product, related_name="recommendation")

    def __str__(self) -> str:
        return str(self.user)


@receiver(post_save, sender=UserInteraction)
def update_recommendations(sender, instance, **kwargs):
    existing_interaction = UserInteraction.objects.filter(
        user=instance.user,
        product=instance.product,
        interaction_type=instance.interaction_type
    ).exclude(id=instance.id).first()

    if existing_interaction:
        existing_interaction.timestamp = instance.timestamp
        existing_interaction.save()

    recommendation, created = Recommendation.objects.get_or_create(
        user=instance.user)
    viewed_product_ids = UserInteraction.objects.filter(
        user=instance.user,
        interaction_type=instance.interaction_type
    ).values_list('product', flat=True).distinct()

    if not viewed_product_ids:
        print("No viewed products found.")

    recommendation.recommend_products.set(viewed_product_ids)
