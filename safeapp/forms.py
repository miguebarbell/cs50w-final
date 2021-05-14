from django import forms
from .models import Password


class PassForm(forms.ModelForm):
    class Meta:
        model = Password
        exclude = ['user']