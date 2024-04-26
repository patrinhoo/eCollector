from django.urls import re_path

from . import views


urlpatterns = [
    re_path(r'^(?!api|admin).*', views.ReactView.as_view(), name='react'),
]
