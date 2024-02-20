from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class Hello(APIView):
    def get(self, request, format=None):
        return Response(data="Hello")
