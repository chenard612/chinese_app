from django.shortcuts import render
from words.models import Word, Vocabulary, Question
from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup
import requests
import json
from datetime import datetime
import time
from django.http import JsonResponse
from words.serializers import WordSerializer
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

def get_word(request, *args, **kwargs):

    # if request.user.is_authenticated:
    # vocab = Vocabulary.objects.filter(user=request.user).order_by('?').first()
    # word = vocab.word
    # response = {'english':word.english, 'mandarin':word.mandarin, 'vocab_id':vocab.id}
    word = Word.objects.exclude(mandarin='').order_by('?').first()
    print(word)
    new_question = Question(word=word)
    new_question.save()
    print(new_question)
    response = {'english':word.english, 'mandarin':word.mandarin, 'vocab_id':word.id}
    return JsonResponse(response)


@csrf_exempt 
def check_answer(request, *args, **kwargs):
    data = request.body.decode('utf-8')
    access = request.COOKIES.get('access-token')
    json_object = json.loads(data)
    word = Word.objects.get(mandarin=json_object['word'])
    if word.english == json_object['answer']:
        question = Question.objects.order_by('-id').first()
        question.success = True
        question.save()
        return JsonResponse({'success':True})
    else:
        print(word)
        return JsonResponse({'success':False, 'word_id':word.id})

@csrf_exempt
def get_wrong_answer(request, *args, **kwargs):
    question = Question.objects.order_by('-id').first()
    if question.success == False:
        word = question.word
        response = {'english':word.english, 'mandarin':word.mandarin, 'vocab_id':word.id}
        return JsonResponse(response)

@csrf_exempt
def get_right_answer(request, *args, **kwargs):
    question = Question.objects.order_by('-id').first()
    if question.success == True:
        word = question.word
        response = {'english':word.english, 'mandarin':word.mandarin, 'vocab_id':word.id}
        return JsonResponse(response)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.username

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


def TokenCustomVerifyView(request):
    access = request.COOKIES.get('access-token')
    refresh = request.COOKIES.get('refresh-token')
    if access:
        try:
            result = JWTAuthentication().get_validated_token(access)
            user = JWTAuthentication().get_user(result)
            return JsonResponse({'success':True})
        except:
            token = RefreshToken(refresh)
            ##check if blacklisted here
            token.blacklist()
            user = User.objects.get(id=token['user_id'])
            result = get_tokens_for_user(user)
            response = HttpResponse({'success'})
            response.set_cookie('access-token', result['access'], httponly=True)
            response.set_cookie('refresh-token', result['refresh'], httponly=True)
            return response
    else:
        return JsonResponse({'success':False, 'info':"User has no token.", 'action':'redirect on login page.'})
