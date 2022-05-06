from .views                 import Create, ImagesList, csrf
from django.urls            import path

app_name = "api"

urlpatterns = [
    path(
        'upload', 
        Create.as_view(), 
        name='upload'
    ),
    path(
        'list', 
        ImagesList.as_view(), 
        name='list'
    ),
    path(
        'csrf',
        csrf
    )
]