from django.forms import model_to_dict
from django.shortcuts import render
from django.http import HttpResponse


from .models import Goal, User, UserPair, Activity
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import GoalSerializer, UserSerializer, UserPairSerializer, ActivitySerializer


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


class UserPairAPIView(APIView):
    def get(self, request):
        all = UserPair.objects.all()
        return Response({'get': UserPairSerializer(all, many=True).data})

    def post(self, request):
        created = UserPair.objects.create(
            donor=User.objects.get(id=request.data['donor']),
            recipient=User.objects.get(id=request.data['recipient']),
        )

        return Response({'post': UserPairSerializer(created).data})


class GoalAPIView(APIView):
    def get(self, request):
        all = Goal.objects.all()
        return Response({'get': GoalSerializer(all, many=True).data})

    def post(self, request):
        id = request.data['id']
        user = User.objects.get(id=id)
        created = Goal.objects.create(
            id=request.data['id'],
            user=user,
            title=request.data['title'],
        )

        return Response({'post': GoalSerializer(created).data})


class ActivityAPIView(APIView):
    def get(self, request):
        all = Activity.objects.all()
        return Response({'get': ActivitySerializer(all, many=True).data})

    def post(self, request):
        created = Activity.objects.create(
            title=request.data['title'],
            description=request.data['description'],
            start=request.data['start'],
            end=request.data['end'],
            goal_index=Goal.objects.get(id=request.data['goal_index']),
            user=User.objects.get(id=request.data['user']),
        )
        return Response({'post': ActivitySerializer(created).data})
