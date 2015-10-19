from django.shortcuts import render, HttpResponse
from rest_framework import viewsets

from to_do_list_app.models import Todo, Task, Commentary
from to_do_list_app.serializers import TodoSerializer, TaskSerializer, CommentarySerializer
# Create your views here.

class TodoViewSet(viewsets.ModelViewSet):
	queryset = Todo.objects.all()
	serializer_class = TodoSerializer

class TaskViewSet(viewsets.ModelViewSet):
	queryset = Task.objects.all()
	serializer_class = TaskSerializer

class CommentaryViewSet(viewsets.ModelViewSet):
	queryset = Commentary.objects.all()
	serializer_class = CommentarySerializer

def index(request):
	return render(request, 'to_do_list_app/base.html', {})