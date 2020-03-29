from rest_framework import viewsets

from item.models import ItemArchetype, ItemInventory
from item.serializers import ItemArchetypeSerializer, ItemInventorySerializer


class ItemArchetypeViewSet(viewsets.ModelViewSet):
    queryset = ItemArchetype.objects.all()
    serializer_class = ItemArchetypeSerializer


class ItemInventoryViewSet(viewsets.ModelViewSet):
    queryset = ItemInventory.objects.all()
    serializer_class = ItemInventorySerializer
