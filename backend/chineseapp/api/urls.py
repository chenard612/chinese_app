from django.urls import path
from api import views
from rest_framework_simplejwt.views import (TokenRefreshView, TokenVerifyView)
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import TokenCustomVerifyView

app_name ='api'

urlpatterns = [
    path('', views.get_word, name="get_word"),
    path('check_answer/', views.check_answer, name="check_answer"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenCustomVerifyView, name='token_verify'),
]