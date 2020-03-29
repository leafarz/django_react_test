from django.db import models
from django.contrib.auth.models import User

ITEM_CATEGORY = (
    ("Shirt", "Shirt"),
    ("Sport Wear", "Sport Wear"),
    ("Outwear", "Outwear"),
)

TAG = (
    ("", "None"),
    ("primary", "Primary"),
    ("danger", "Danger"),
)

TAG_DISPLAY = (
    ("", "None"),
    ("new", "New"),
    ("bestseller", "Bestseller"),
)


class Item(models.Model):
    id = models.AutoField(primary_key=True)
    label = models.CharField(max_length=200)
    image_url = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=ITEM_CATEGORY)
    tag = models.CharField(max_length=10, choices=TAG, default="", blank=True)
    tag_display = models.CharField(
        max_length=10, choices=TAG_DISPLAY, default="", blank=True
    )
    quantity = models.IntegerField(default=100)
    original_price = models.IntegerField()
    curr_price = models.IntegerField()

    def __str__(self):
        return self.label
