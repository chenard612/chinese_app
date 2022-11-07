from django.shortcuts import render
from words.models import Word
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import requests
import json
from datetime import datetime
import time
from django.http import JsonResponse

# Create your views here.
def get_new_words():
    url = "https://www.mit.edu/~ecprice/wordlist.10000"
    response = requests.get(url)
    words = response.content.splitlines()
    for w in words:
        w = str(w)
        w = w.replace("b'", "")
        w = w.replace("'", "")
        try:
            word = Word.objects.get(english=w)
        except:
            now = datetime.now()
            word = Word(english=w, added=now)
            word.save()
            print("Word ::", w, ":: created")

def translate_words():
    url = "https://google-translate1.p.rapidapi.com/language/translate/v2"
    words = Word.objects.filter(mandarin='').order_by('?')[:500]
    for word in words:
        try:
            headers = {
                "content-type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "application/gzip",
                "X-RapidAPI-Key": "a71537b9femsh6fd494e7ef321a6p1c7a8cjsn8c4b8ba2e8c3",
                "X-RapidAPI-Host": "google-translate1.p.rapidapi.com"
            }
            payload = "q=" + word.english + "&target=zh-CN&source=en"
            r = requests.post(url, data=payload, headers=headers)
            dic = r.json()
            trans = dic['data']['translations'][0]['translatedText']
            print('')
            word.mandarin = trans
            payload = "q=" + word.english + "&target=ar&source=en"
            r = requests.post(url, data=payload, headers=headers)
            dic = r.json()
            trans = dic['data']['translations'][0]['translatedText']
            word.arabic = trans
            word.save()
            print(word.english, ' ||| ', word.mandarin, ' ||| ', word.arabic)
            time.sleep(5)
        except:
            print(word.english, 'did not work!')
            try:
                print(r)
            except:
                print('no response')

def get_word(request, *args, **kwargs):
    word = Word.objects.exclude(mandarin='').order_by("?").first()
    response = {'english':word.english, 'mandarin':word.mandarin}
    print(response)
    return JsonResponse(response)

def check_answer(request, *args, **kwargs):
    answer = request.POST.get('data')
    print(answer)