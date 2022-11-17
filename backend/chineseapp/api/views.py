from django.shortcuts import render
from words.models import Word
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import requests
import json
from datetime import datetime
import time
from django.http import JsonResponse
from words.serializers import WordSerializer

def get_word(request, *args, **kwargs):
    word = Word.objects.exclude(mandarin='').order_by("?").first()
    print(word)
    response = {'english':word.english, 'mandarin':word.mandarin}
    print(response)
    return JsonResponse(response)

def check_answer(request, *args, **kwargs):
    answer = request.POST.get('data')
    print(answer)



