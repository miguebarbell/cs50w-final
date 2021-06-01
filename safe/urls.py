"""safe URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from safeapp import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),

    path('', views.index, name='index'),
    path('passw', views.home, name='passw'),


    path("genapi/<int:len>/<str:esp>", views.genapi, name='apigenerator'),
    path("gen", views.gen, name='generator'),
    # path("genapi/<int:len>/<str:esp>", views.genapi, name='generatorfull'),
    # path("genapi/<int:len>/", views.genapi, name='generatorlen'),
    # path("genapi/<str:esp>", views.genapi, name='generatoresp'),

    path('edit/<int:id>', views.edit, name='editpass'),
    path('del/<int:id>', views.delete, name='delete'),

    path('profile', views.profile, name='profile'),
    path('delete', views.delete_profile, name="delete_profile"),
    path('export', views.export_db, name='export')

]
