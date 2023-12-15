from django.db import connection
from .models import User

'''
id = models.IntegerField(primary_key=True)
email = models.CharField(max_length=150)
password = models.CharField(max_length=100)
first_name = models.CharField(max_length=100)
second_name = models.CharField(max_length=100)
'''


def generate():
    User.objects.all().delete()
    model1 = User(id=1, email='shestakova.ko@phystech.edu',
                  password='password', first_name='Kseniya', second_name='Shastakova')
    model1.save()

    model2 = User.objects.create(id=2, email='mail@gmail.com',
                                 password='password', first_name='Anon', second_name='Anon')


# generate()
