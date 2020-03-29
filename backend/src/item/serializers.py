from rest_framework import serializers
from item.models import ItemArchetype, ItemInventory


class ItemArchetypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemArchetype
        fields = "__all__"


class ItemInventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemInventory
        fields = "__all__"
