from django.urls import path
from api import views

app_name ='api'

urlpatterns = [
    path('', views.get_word, name="get_word"),
]