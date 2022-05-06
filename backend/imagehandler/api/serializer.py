from rest_framework import serializers
from .models import Image, ImageComment



class CommentSerializer(serializers.ModelSerializer):
	class Meta:
		model = ImageComment
		fields = ('id', 'image', 'comment')
      
class ImageSerializer(serializers.ModelSerializer):
  
	def create(self, validated_data):
		comments_data = validated_data.pop("comments")
		image = Image.objects.create(**validated_data)

		for comment in comments_data:
			ImageComment.objects.create(image = image, comment = comment)
		return image

	class Meta:
		model = Image
		fields = ('id', 'title', 'file_name')