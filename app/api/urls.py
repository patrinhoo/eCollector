from django.urls import path, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'cards', views.CardViewSet, basename="cards")

urlpatterns = [
    path('', include(router.urls)),
    path('user/create', views.CreateUserView.as_view(), name='create'),
    path('user/token', views.CreateTokenView.as_view(), name='token'),
    path('user/me', views.ManageUserView.as_view(), name='me'),
]
