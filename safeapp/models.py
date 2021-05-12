from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Password(models.Model):
    user = models.ForeignKey("User", to_field='username', on_delete=models.CASCADE, related_name='user')
    username = models.CharField(max_length=50)
    passw = models.CharField(max_length=50, null=False)
    notes = models.TextField(max_length=4000)
    date = models.DateTimeField(auto_now_add=True)
