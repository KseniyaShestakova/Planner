from django.db import models


class User(models.Model):
    index = models.Index
    email = models.CharField(max_length=150)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)


class UserPair(models.Model):
    # donor allows recipient to watch his goal-activity statistics
    donor = models.ForeignKey(to=User, on_delete=models.CASCADE)
    recipient = models.ForeignKey(to=User, on_delete=models.CASCADE)


class Goal(models.Model):
    index = models.Index()
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Activity(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    start = models.DateTimeField()
    end = models.DateTimeField()
    goal_index = models.ForeignKey(to=Goal, on_delete=models.CASCADE)
    user = models.ForeignKey(to=Goal, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
