from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Notes(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name = 'notes')
    title = models.CharField(max_length=250)
    body=models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-updated']
    
    def __str__(self):
        return self.title