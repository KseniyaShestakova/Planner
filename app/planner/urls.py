from django.contrib import admin
from django.urls import path, include


from .views import GoalAPIView,  UserPairAPIView, ActivityAPIView, UserIDMapView

urlpatterns = [
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    path('api/goal/list', GoalAPIView.as_view()),
    # path('api/user/list', UserAPIView.as_view()),
    path('api/user_pair/list', UserPairAPIView.as_view()),
    path('api/activity/list', ActivityAPIView.as_view()),
    path('api/user_id_map/list', UserIDMapView.as_view()),
]