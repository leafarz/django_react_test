import os
from django.core.wsgi import get_wsgi_application
from decouple import config

os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'core.settings.{config("BUILD_CONFIG")}')
application = get_wsgi_application()
