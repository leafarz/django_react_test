import jwt
from django.contrib.auth.models import User
from django.core import serializers
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from cart.models import Cart
from cart.serializers import CartSerializer
from item.models import Item


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        cart = Cart.objects.all()
        return Response(cart.values())

    def post(self, request):
        payload = request.auth.payload

        user_id = payload["user_id"]
        user = User.objects.get(id=user_id)

        item_id = request.data["item"]
        item = Item.objects.get(id=item_id)
        quantity = request.data["quantity"]

        try:
            cart = Cart.objects.get(owner=user, item=item)
            cart.quantity += quantity
        except:
            cart = Cart(owner=user, item=item, quantity=quantity)

        cart.save()
        return Response(CartSerializer(instance=cart).data)


class UserCartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        payload = request.auth.payload
        user_id = payload["user_id"]
        carts = Cart.objects.filter(owner_id=user_id)
        item_ids = list(carts.values_list("item_id", flat=True))
        item_list = list(Item.objects.filter(id__in=item_ids).values())
        item_quantities = list(carts.values_list("quantity", flat=True))

        json_data = [
            {"item": item, "quantity": quantity}
            for item, quantity in zip(item_list, item_quantities)
        ]
        return Response(json_data)


class ClearCartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        payload = request.auth.payload

        user_id = payload["user_id"]
        cart = Cart.objects.filter(owner_id=user_id)
        json = serializers.serialize("json", cart)
        cart.delete()
        return Response(json)
