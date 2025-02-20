from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

# ------------------------- CUSTOM USER MODEL EXTENDING DJANGO'S ABSTRACTUSER -------------------------------------


class User(AbstractUser):
    # Avoid conflicts with the default auth.User 
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='custom_user_set',  
        related_query_name='custom_user'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='custom_user_set', 
        related_query_name='custom_user'
    )

    class Meta:
        db_table = 'users'
        
    def __str__(self):
        return self.username

