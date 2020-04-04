from .base import *

DEBUG = True
ALLOWED_HOSTS = []

# CORS
CORS_ORIGIN_ALLOW_ALL = False
CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

JWT_AUTH_COOKIE = "JWT_AUTH_COOKIE"
