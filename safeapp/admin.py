from django.contrib.auth.admin import UserAdmin
from django.contrib import admin

# Register your models here.
from .models import User, Password

admin.site.register(User, UserAdmin)
admin.site.register(Password)