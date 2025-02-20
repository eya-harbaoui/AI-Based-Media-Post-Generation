from django.db import models
from django.conf import settings

#--------------------------------------------- POST MODEL --------------------------------------------


class Post(models.Model):
    """A model representing a post created by a user on a social media platform using AI"""

    PLATFORM_CHOICES = [
        ('linkedin', 'LinkedIn'),
        ('facebook', 'Facebook'),
        ('twitter(X)', 'Twitter(X)'),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    original_content = models.TextField()
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES)
    generated_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.platform} post by {self.user.username} - {self.created_at}"
