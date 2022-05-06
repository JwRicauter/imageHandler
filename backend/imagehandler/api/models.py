from django.db import models


class Image(models.Model):

    title = models.CharField(
        "Image Title",
        max_length=200
    )
    file_name = models.CharField(
        default='filename',
        max_length=500
    )
	
    def __str__(self):
        return self.title

class ImageComment(models.Model):

    image = models.ForeignKey(
        Image, 
        on_delete=models.CASCADE
    )
    comment = models.TextField(
        blank=True, 
        null=True
    )