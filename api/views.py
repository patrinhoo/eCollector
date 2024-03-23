from rest_framework import viewsets, generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiParameter

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


@extend_schema_view(
    list=extend_schema(
        parameters=[
            OpenApiParameter(name='sortField', description='Type sort field', type=str),
            OpenApiParameter(name='sortOrder', description='Type sort order (ascend/descend)', type=str),
        ]
    )
)
class CardViewSet(viewsets.ModelViewSet):
    queryset = models.Card.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = super().get_queryset()

        field = self.request.query_params.get('sortField')
        order = self.request.query_params.get('sortOrder')

        if field is not None:
            sort_field = field
            if order == 'descend':
                sort_field = '-' + sort_field

            queryset = queryset.order_by(sort_field)
        else:
            queryset = queryset.order_by('-id')
        
        return queryset.filter(user=self.request.user).distinct()

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.CardListSerializer
        return serializers.CardSerializer
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
