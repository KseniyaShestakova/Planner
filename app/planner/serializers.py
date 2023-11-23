import io

from rest_framework import serializers
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from .models import User, UserPair, Goal, Activity

from .generator import generate


class UserSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    email = serializers.CharField(max_length=150)
    password = serializers.CharField(max_length=100)
    first_name = serializers.CharField(max_length=100)
    second_name = serializers.CharField(max_length=100)


class UserPairSerializer(serializers.Serializer):
    donor = serializers.IntegerField()
    recipient = serializers.IntegerField()


class GoalSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    user = serializers.IntegerField()
    title = serializers.CharField(max_length=100)


class ActivitySerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=100)
    start = serializers.DateTimeField()
    end = serializers.DateTimeField()
    goal_index = serializers.IntegerField()
    user = serializers.IntegerField()

