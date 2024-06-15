from django.urls import path, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'cards', views.CardViewSet, basename="cards")
router.register(r'pendingcards', views.PendingCardViewSet, basename="pendingcards")

upgrade_router = routers.DefaultRouter()
upgrade_router.register(r'upgrade', views.UpgradePendingCardViewSet, basename="upgrade")

urlpatterns = [
    path('', include(router.urls)),
    path('pendingcards/<int:pk>/', include(upgrade_router.urls)),
    path('user/create', views.CreateUserView.as_view(), name='create'),
    path('user/token', views.CreateTokenView.as_view(), name='token'),
    path('user/me', views.ManageUserView.as_view(), name='me'),
    path('export/pdf/', views.ExportCardsPDFView.as_view(), name='export_cards_pdf'),
]
