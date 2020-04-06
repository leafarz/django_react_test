import jwt
from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.models import Cart
from cart.serializers import CartSerializer
from item.models import Item


class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]


class UserCartView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        payload = request.auth.payload
        user_id = payload["user_id"]
        carts = Cart.objects.filter(owner=user_id)
        item_quantities = list(carts.values_list("quantity", flat=True))
        item_ids = list(carts.values_list("id", flat=True))
        item_list = list(Item.objects.filter(id__in=item_ids).values())

        json_data = [
            {"item": item, "quantity": quantity}
            for item, quantity in zip(item_list, item_quantities)
        ]
        return Response(json_data)
