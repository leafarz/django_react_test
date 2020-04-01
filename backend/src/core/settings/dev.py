from .base import *

DEBUG = True
ALLOWED_HOSTS = []

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

JWT_AUTH_COOKIE = "JWT_AUTH_COOKIE"
