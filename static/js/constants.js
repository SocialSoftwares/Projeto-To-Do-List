(function (){
	angular.module('ToDoList')
	.constant('BASE_TODOS', 'http://test1.com:8000/api/todos/')

	.constant('BASE_TASKS', 'http://test1.com:8000/api/tasks/')

	.constant('BASE_COMMENTS', 'http://test1.com:8000/api/commentaries/')

	.constant('facebookConfigSettings', {
	    'routingEnabled' : true,
	    'appID'          : '1694220437474875'
	});
})();