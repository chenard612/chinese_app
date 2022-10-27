from django.db import models

# Create your models here.
class Word(models.Model):
    english = models.CharField(max_length=120, default="")
    mandarin = models.CharField(max_length=40, default="")
    arabic = models.CharField(max_length=40, default="")
    completed = models.BooleanField(default=False)
    revised = models.IntegerField(default=0)
    added = models.DateTimeField(default=None)
    definition = models.CharField(max_length=240, default="")
    grammatical_type = models.CharField(max_length=30, default="")
    pinyin = models.CharField(max_length=240, default="")
    used_in_a_sentence = models.CharField(max_length=240, default="")

