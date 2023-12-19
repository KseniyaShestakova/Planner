from django.forms import model_to_dict
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import GenericViewSet

from .models import Goal, UserPair, Activity, UserIDMap
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import GoalSerializer, UserSerializer, UserPairSerializer, ActivitySerializer, UserIDMapSerializer

from datetime import datetime

'''
class UserAPIView(APIView):
    def get(self, request):
        all = User.objects.all()
        return Response({'get': UserSerializer(all, many=True).data})

    def post(self, request):
        created = User.objects.create(
            id=request.data['id'],
            email=request.data['email'],
            password=request.data['password'],
            first_name=request.data['first_name'],
            second_name=request.data['second_name'],
        )

        return Response({'post': UserSerializer(created).data})

'''


class UserPairAPIView(APIView):
    def get(self, request):
        all = UserPair.objects.all()
        return Response({'get': UserPairSerializer(all, many=True).data})

    def post(self, request):
        created = UserPair.objects.create(
            donor=UserIDMap.objects.get(id=request.data['donor']),
            recipient=UserIDMap.objects.get(id=request.data['recipient']),
        )

        return Response({'post': UserPairSerializer(created).data})


class GoalAPIView(APIView):
    allowed_methods = ('GET', 'POST', 'PUT', 'OPTIONS', 'DELETE')
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def get(self, request):
        all = Goal.objects.all()
        return Response({'get': GoalSerializer(all, many=True).data})

    def post(self, request):
        all = Goal.objects.all()
        curr_id = len(all) + 10
        user = UserIDMap.objects.get(id=request.data['user'])
        created = Goal.objects.create(
            id=curr_id,
            user=user,
            title=request.data['title'],
        )
        return Response({'post': GoalSerializer(created).data})

    def delete(self, request):
        print(request.data)
        Goal.objects.filter(user=request.data['user'], title=request.data['title']).delete()
        return Response({'delete': 'ok'})

class UserIDMapView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def get(self, request):
        all = UserIDMap.objects.all()
        return Response({'get': UserIDMapSerializer(all, many=True).data})

    def post(self, request):
        # backend chooses id on it's own
        all = UserIDMap.objects.all()
        curr_id = len(all) + 1
        created = UserIDMap.objects.create(
            id=curr_id,
            username=request.data['username']
        )
        return Response({'post': UserIDMapSerializer(created).data})


class ActivityAPIView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    authentication_classes = (TokenAuthentication,)

    def get(self, request):
        all = Activity.objects.all()
        return Response({'get': ActivitySerializer(all, many=True).data})

    def check_time(self, time):
        date = datetime.today().strftime('%Y-%m-%d')
        date += ' ' + time
        print(date)
        return date

    def check_goal(self, goal, user):
        goals = Goal.objects.filter(title=goal, user=user)
        print(goals)
        if len(goals) == 0:
            return Goal.objects.get(id=-1)
        return Goal.objects.get(title=goal, user=user)

    def post(self, request):
        print(request.data)
        print(request.data)
        created = Activity.objects.create(
            title=request.data['title'],
            description=request.data['description'],
            start=self.check_time(request.data['start']),
            end=self.check_time(request.data['end']),
            goal_index=self.check_goal(request.data['goal'], request.data['user']),
            user=UserIDMap.objects.get(id=request.data['user']),
        )
        return Response({'post': ActivitySerializer(created).data})
