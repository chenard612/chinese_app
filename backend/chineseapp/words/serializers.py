from rest_framework import serializers 
from words.models import Word
 
 
class WordSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Word
        fields = ('id',
                  'english',
                  'mandarin',
                  'arabic')