from django.urls import path

from . import views


urlpatterns = [
    path('', views.ReactView.as_view(), name='react'),
    path('login', views.ReactView.as_view(), name='login'),
    path('register', views.ReactView.as_view(), name='register'),
]
