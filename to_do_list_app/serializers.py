from rest_framework import serializers
from to_do_list_app.models import Todo, Task, Commentary

class TodoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Todo

class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task

class CommentarySerializer(serializers.ModelSerializer):
	class Meta:
		model = Commentary