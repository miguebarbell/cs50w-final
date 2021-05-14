from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Password(models.Model):
    user = models.ForeignKey("User", to_field='username', on_delete=models.CASCADE, related_name='user')
    title = models.CharField(max_length=50, null=False)
    username = models.CharField(max_length=50, blank=True)
    password = models.CharField(max_length=50, null=False)
    notes = models.TextField(max_length=4000, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f'{self.title} by {self.user}'
