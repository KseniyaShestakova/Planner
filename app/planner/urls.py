from django.contrib import admin
from django.urls import path, include


from .views import GoalAPIView, UserAPIView, UserPairAPIView, ActivityAPIView

urlpatterns = [
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    path('api/goal/list', GoalAPIView.as_view()),
    path('api/user/list', UserAPIView.as_view()),
    path('api/user_pair/list', UserPairAPIView.as_view()),
    path('api/activity/list', ActivityAPIView.as_view()),
]