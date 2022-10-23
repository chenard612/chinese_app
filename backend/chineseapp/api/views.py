from django.shortcuts import render
from words.models import Word
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import requests
import json
from datetime import datetime

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