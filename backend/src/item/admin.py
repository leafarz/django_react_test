from django.contrib import admin
from item.models import Item


class ItemAdmin(admin.ModelAdmin):
    list_display = (
        "label",
        "category",
        "tag",
        "tag_display",
        "quantity",
        "original_price",
        "curr_price",
    )
    list_editable = (
        "category",
        "tag",
        "tag_display",
        "quantity",
        "original_price",
        "curr_price",
    )


admin.site.register(Item, ItemAdmin)
