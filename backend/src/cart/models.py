from django.db import models
from django.contrib.auth.models import User
from item.models import Item


class Cart(models.Model):
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    item = models.ForeignKey(to=Item, on_delete=models.CASCADE)
    quantity = models.IntegerField()
