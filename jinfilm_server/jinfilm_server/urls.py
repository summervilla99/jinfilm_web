from django.contrib import admin
from django.urls import path, include
from accounts import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('', views.home, name='home'),
    # path('', views.index, name='index'),
    # path('contact/', views.contact, name='contact'),
    # path('artist1/', views.artist1, name='artist1'),
    # path('artist1_video/', views.artist1_video, name='artist1_video'),
    # path('artist2/', views.artist2, name='artist2'),
    
    
    # 다른 URL 패턴들을 여기에 추가할 수 있습니다.
]
