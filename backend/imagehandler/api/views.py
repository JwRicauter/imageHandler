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
            return Response({"message": "Upload Failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class Detail(generics.GenericAPIView):

    # This will retrieve the detail of the Image
    def get(self, request):
        get = request.GET or {}
        id = get.get('id')
        image = Image.objects.get(id = id)
        
        comments_objects = ImageComment.objects.filter(image = image)
        comments = []
        for object in list(comments_objects):
            comments.append(object.comment)
        

        return Response(
            {
                "file": get_file(image.file_name),
                'title': image.title,
                'file_name': image.file_name,
                'comments': comments
            }, 
            status=status.HTTP_200_OK

        )

class Update(generics.GenericAPIView):

    
    def post(self, request):
        try:
            data = json.loads(request.body.decode('utf-8'))
            id = data['id']
            image = Image.objects.get(id = id)
            comments = data['comments']
            for comment in comments:
                c = ImageComment(image=image, comment=comments[comment])
                c.save()
            
            return Response({"message": "Upldate Successful"}, status=status.HTTP_200_OK)

        except Exception as e:
            print(e)
            return Response({"message": "Upldate Failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        



class ImagesList(generics.ListCreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def list(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        queryset = self.get_queryset()
        serializer = ImageSerializer(queryset, many=True)
        return Response(serializer.data)





