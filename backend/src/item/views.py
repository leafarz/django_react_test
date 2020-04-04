from rest_framework import viewsets

from item.models import Item
from item.serializers import ItemSerializer
from rest_framework.permissions import AllowAny


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [AllowAny]
