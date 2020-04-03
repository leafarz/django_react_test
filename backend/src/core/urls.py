from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from item.views import ItemViewSet
from rest_framework_simplejwt import views as jwt_views

router = routers.DefaultRouter()
router.register("api/item", ItemViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("admin/", admin.site.urls),
    path("api/auth/", include("dj_rest_auth.urls")),
    path("api/auth/registration/", include("dj_rest_auth.registration.urls")),
    path(
        "api/auth/token/refresh/",
        jwt_views.TokenRefreshView.as_view(),
        name="token_refresh",
    ),
]
