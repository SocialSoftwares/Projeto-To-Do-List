from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
	return render(request, 'to_do_list_app/index.html', {})