from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status

from . import models
from . import serializers


# Create your views/viewsets here.
class CardViewSet(viewsets.ModelViewSet):
    queryset = models.Card.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.CardListSerializer
        return serializers.CardSerializer
