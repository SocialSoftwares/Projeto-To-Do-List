(function (){
	angular.module('ToDoList')
	.service('Todos', function($http, BASE_TODOS){
	
	var Todos = {};

	Todos.all = function(){
		return $http.get(BASE_TODOS);
	};

	Todos.update = function(updatedTodo){
		return $http.put(BASE_TODOS + updatedTodo.id, updatedTodo);
	};

	Todos.delete = function(id){
		return $http.delete(BASE_TODOS + id + '/');
	};

	Todos.addOne = function(newTodo){
        return $http.post(BASE_TODOS, newTodo);
    };

	return Todos;
});
})();