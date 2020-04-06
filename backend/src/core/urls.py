from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from cart.views import CartViewSet, UserCartView
from item.views import ItemViewSet

router = routers.DefaultRouter()
router.register("api/item", ItemViewSet)
router.register("api/cart", CartViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("api/auth/", include("dj_rest_auth.urls")),
    path("api/auth/registration/", include("dj_rest_auth.registration.urls")),
    path(
        "api/auth/token/refresh/",
        jwt_views.TokenRefreshView.as_view(),
        name="auth.refresh",
    ),
    path("api/usercart", UserCartView.as_view(), name="cart.usercart"),
]
