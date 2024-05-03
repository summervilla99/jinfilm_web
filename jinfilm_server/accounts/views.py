from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def home(request):
    return render(request, 'jinfilm_front/index.html')

# def get(self, request):
#     return render(request, 'jinfilm_front/src/Contact.tsx')

@api_view()
def index(request):
    return Response({'message': 'Hello, world!'})