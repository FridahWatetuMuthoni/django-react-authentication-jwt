from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenRefreshView



urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('token/',views.MyTokenObtainPairView.as_view(), name='token_obtian_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]