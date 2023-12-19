from django.db import connection
from .models import UserIDMap, Goal

'''
id = models.IntegerField(primary_key=True)
email = models.CharField(max_length=150)
password = models.CharField(max_length=100)
first_name = models.CharField(max_length=100)
second_name = models.CharField(max_length=100)
'''


def generate():

    # User.objects.all().delete()
    #model1 = User(id=1, email='shestakova.ko@phystech.edu',
    #              password='password', first_name='Kseniya', second_name='Shastakova')
    # model1.save()

    # UserIDMap.objects.all().delete()
    # model3 = UserIDMap(id=4, username='xxeniash')

    # model3.save()

    fake_goal = Goal(id=-1, user=UserIDMap.objects.get(id=1), title='Not found')

    fake_goal.save()
    print('here')


# generate()