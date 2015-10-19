from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=75)
    uid = models.IntegerField()

    def __unicode__(self):
        return self.title

class Task(models.Model):
	title = models.CharField(max_length=75)
	is_completed = models.BooleanField(default=False)
	todo = models.ForeignKey(Todo)
	

	def __unicode__(self):
		return self.title

class Commentary(models.Model):
	content = models.CharField(max_length=300)
	task = models.ForeignKey(Task)