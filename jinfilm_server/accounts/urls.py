from django.contrib import admin
from django.urls import path, include
from accounts import views
from accounts.views import home

urlpatterns = [
    # path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    
    
    # path('contact/', views.contact, name='contact'),
    # path('artist1/', views.artist1, name='artist1'),
    # path('artist2/', views.artist2, name='artist2'),
    
    # path('hey/', hey),
]
