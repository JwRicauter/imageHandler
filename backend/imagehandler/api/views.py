import base64
import json

from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django.middleware.csrf import get_token

from django.http import JsonResponse

from .serializer import ImageSerializer
from .utils import *
from .models import Image, ImageComment

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})

class Create(generics.GenericAPIView):

    serializer_class = ImageSerializer
    parser_classes = (MultiPartParser, )

    def post(self, request, format = None):

        # S3 handler
        file = request.FILES['file']
        uploaded_ok = upload_file(file)
        if not uploaded_ok: return Response({"message": "Upload Failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            title = request.POST['title']
            image = Image.objects.create(
                title = title,
                file_name = str(file)
            )
            
            comments = []
            if 'comments' in request.POST: comments = json.loads(request.POST['comments'])

            for key in comments:
                ImageComment.objects.create(image = image, comment = comments[key])

            return Response({"message": "Upload Successful"}, status=status.HTTP_200_OK)

        except Exception as e:
            print(e)
            return Response({"message": "Upload Failed", "status": "200"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class ImagesList(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        print(queryset)
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)