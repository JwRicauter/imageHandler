from django.contrib import admin
from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace = 'api')),
    re_path(r'', views.catchall),
    
]