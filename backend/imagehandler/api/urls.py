from .views                 import Create, ImagesList, Detail, Update, csrf
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
        'detail', 
        Detail.as_view(), 
        name='detail'
    ),
    path(
        'update',
        Update.as_view(),
        name='update'
    ),
    path(
        'csrf',
        csrf
    )
]