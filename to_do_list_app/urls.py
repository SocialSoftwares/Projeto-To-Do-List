from django.conf.urls import patterns, include, url
from django.contrib import admin
from to_do_list_app import views
from rest_framework import routers


todo_router = routers.DefaultRouter()
todo_router.register(r'todos', views.TodoViewSet, base_name='todos')
todo_router.register(r'tasks', views.TaskViewSet, base_name='tasks')
todo_router.register(r'commentaries', views.CommentaryViewSet, base_name='commentaries')

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_drf_starter_project.views.home', name='home'),

    url(r'^$', views.index, name="index"),
    url(r'^api/', include(todo_router.urls)),
)