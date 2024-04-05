from rest_framework import viewsets, generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend

from . import models
from . import serializers


# Create your views/viewsets here.
class CreateUserView(generics.CreateAPIView):
    serializer_class = serializers.UserSerializer


class CreateTokenView(ObtainAuthToken):
    serializer_class = serializers.AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class CardViewSet(viewsets.ModelViewSet):
    queryset = models.Card.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['catalog_number', 'name']
    search_fields = ['catalog_number', 'name']
    ordering_fields = ['id', 'catalog_number', 'name', 'status']
    ordering = ['-id']

    def get_queryset(self):
        queryset = super().get_queryset()
        
        return queryset.filter(user=self.request.user).distinct()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.CardListSerializer
        return serializers.CardSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
