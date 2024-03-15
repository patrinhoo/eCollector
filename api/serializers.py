from rest_framework import serializers
from . import models


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Card
        fields = '__all__'


class CardListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Card
        fields = ['id', 'name', 'catalog_number', 'status', 'comment']
