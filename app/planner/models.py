from django.db import models
import django.contrib.auth.models


class User(models.Model):
    user = models.OneToOneField(django.contrib.auth.models.User, on_delete=models.CASCADE, null=True, blank=True)
    id = models.IntegerField(primary_key=True)
    email = models.CharField(max_length=150)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)

    def __int__(self):
        return self.id


class UserPair(models.Model):
    # donor allows recipient to watch his goal-activity statistics
    donor = models.ForeignKey('User', on_delete=models.CASCADE, null=True,
                              related_name='up_donor_fk')
    recipient = models.ForeignKey('User', on_delete=models.CASCADE, null=True,
                                  related_name='up_recipient_fk')


class Goal(models.Model):
    id = models.IntegerField(primary_key=True)
    user = models.ForeignKey('User', on_delete=models.CASCADE, null=True,
                             related_name='goal_user_fk')
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    def __int__(self):
        return self.id

class Activity(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    start = models.DateTimeField()
    end = models.DateTimeField()
    goal_index = models.ForeignKey('Goal', on_delete=models.PROTECT, null=True,
                                   related_name='activity_goal_fk')
    user = models.ForeignKey('User', on_delete=models.PROTECT, null=True,
                             related_name='activity_user_fk')

    def __str__(self):
        return self.title


