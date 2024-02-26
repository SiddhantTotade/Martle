from django.db import models
from martle_app_authentication.models import User

# Create your models here.


class Martlet(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    martle_bank = models.FloatField(default=500000)
    martle_pay = models.FloatField(default=0)
