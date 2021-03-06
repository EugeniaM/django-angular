# Generated by Django 3.0.7 on 2020-06-22 19:36

from django.db import migrations
from django.conf import settings


def create_data(apps, schema_editor):
    User = apps.get_model(settings.AUTH_USER_MODEL)
    user = User(pk=1, username='auth0user', is_active=True, email="maltsevae88@gmail.com")
    user.save()


class Migration(migrations.Migration):

    dependencies = [
        ('todoapi', '0002_dummy_tasks'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
