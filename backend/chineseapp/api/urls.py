from django.urls import path
from api import views
from rest_framework.authtoken.views import obtain_auth_token

app_name ='api'

urlpatterns = [
    path('', views.get_word, name="get_word"),
    path('check_answer/', views.check_answer, name="check_answer"),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]