from rest_framework import viewsets, generics, authentication, permissions, status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
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


class PendingCardViewSet(viewsets.ModelViewSet):
    queryset = models.PendingCard.objects.all()
    serializer_class = serializers.PendingCardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['name', 'type']
    search_fields = ['name', 'type']
    ordering_fields = ['id', 'name', 'type']
    ordering = ['-id']

    def get_queryset(self):
        queryset = super().get_queryset()
        
        return queryset.filter(user=self.request.user).distinct()
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UpgradePendingCardViewSet(viewsets.ViewSet):
    serializer_class = serializers.UpgradeCardSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def create(self, request, pk):
        pending_card = models.PendingCard.objects.get(id=pk)

        serializer = serializers.UpgradeCardSerializer(data=request.data)
        
        if serializer.is_valid():
            card = serializer.save(
                user=self.request.user, 
                name=pending_card.name, 
                type=pending_card.type, 
                awers=pending_card.awers, 
                rewers=pending_card.rewers
            )

            pending_card.delete()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CardViewSet(viewsets.ModelViewSet):
    queryset = models.Card.objects.all()
    serializer_class = serializers.CardSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = (MultiPartParser, FormParser)

    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = [
        'name', 
        'type',
        'status',
        'catalog_number',
        'printed_amount',
        'nr_of_pulses',
        'price',
        'value',
        'production_date',
        'expiration_date',
        'series',
        'prefix',
        'producer',
        'material_type',
        'shape',
        'surface_type',
        'number_printype',
        'number_type',
        'magnetic_stripe_width',
        'gsm_operator',
        'chip_type',
        'publisher',
    ]
    search_fields = [
        'name', 
        'type',
        'status',
        'catalog_number',
        'printed_amount',
        'nr_of_pulses',
        'price',
        'value',
        'production_date',
        'expiration_date',
        'series',
        'prefix',
        'producer',
        'material_type',
        'shape',
        'surface_type',
        'number_printype',
        'number_type',
        'magnetic_stripe_width',
        'gsm_operator',
        'chip_type',
        'publisher',
    ]
    ordering_fields = [
        'id', 
        'name', 
        'type',
        'status',
        'catalog_number',
        'printed_amount',
        'nr_of_pulses',
        'price',
        'value',
        'production_date',
        'expiration_date',
        'series',
        'prefix',
        'producer',
        'material_type',
        'shape',
        'surface_type',
        'number_printype',
        'number_type',
        'magnetic_stripe_width',
        'gsm_operator',
        'chip_type',
        'publisher',
    ]
    ordering = ['-id']

    def get_queryset(self):
        queryset = super().get_queryset()
        
        return queryset.filter(user=self.request.user).distinct()
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
