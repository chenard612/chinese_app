from django.db import models
from django.conf import settings

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

    def __str__(self):
        return '{} | {} | {}'.format(self.english, self.mandarin, self.arabic)

class Vocabulary(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='vocabulary_user', null=True)
    word = models.ForeignKey(Word, on_delete=models.CASCADE, related_name='vocabulary_user', null=True)
    repetition = models.IntegerField(default=0)
    finished = models.BooleanField(default=False, null=True)
    deleted = models.BooleanField(default=False, null=True)

    
class Question(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='question_user', null=True)
    word = models.ForeignKey(Word, on_delete=models.CASCADE, related_name='question_word', null=True)
    success = models.BooleanField(default=False, null=True)