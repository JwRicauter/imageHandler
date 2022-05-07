import json
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Image, ImageComment



class ImageTestCase(TestCase):

    def test_list_images(self):
        """Check if the list of all images is retrieve"""
        client = APIClient()
        response = client.get(
            '/api/list',
            format='json'
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_update_comments(self):
        """Check if the comments are updated succesfully"""
        client = APIClient()
        response = client.post(
            '/api/update', 
            {
                "image": 1,
                "comments": ["hola", "saludos"],
            },
            format='json'
        )
        print(response)
        self.assertEqual(response.status_code, status.HTTP_200_OK)