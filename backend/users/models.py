from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    bio = models.CharField(max_length=250, blank=True, null=True)
    profile_photo = models.ImageField(default='default.jpg', upload_to='profile_images/')
    
    def __str__(self):
        return self.username
