from django.db import models
from django.contrib.auth.models import User

ITEM_CATEGORY = (
    ("SHIRT", "Shirt"),
    ("SPORTWEAR", "Sport Wear"),
    ("OUTWEAR", "Outwear"),
)

TAG = (
    ("PRIMARY", "Primary"),
    ("SECONDARY", "Secondary"),
    ("DANGER", "Danger"),
)

TAG_DISPLAY = (
    ("NEW", "New"),
    ("BESTSELLER", "Bestseller"),
    ("None", ""),
)


class ItemArchetype(models.Model):
    id = models.AutoField(primary_key=True)
    image_url = models.CharField(max_length=200)
    label = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=ITEM_CATEGORY)
    tag = models.CharField(max_length=10, choices=TAG)
    tag_display = models.CharField(max_length=10, choices=TAG_DISPLAY)
    price = models.IntegerField()

    class Meta:
        verbose_name_plural = "Item Archetypes"

    def __str__(self):
        return self.label


class ItemInventory(models.Model):
    item_archetype = models.ForeignKey(ItemArchetype, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=100)
    price = models.IntegerField()

    class Meta:
        verbose_name_plural = "Item Inventories"

    def __str__(self):
        return self.item_archetype.label
