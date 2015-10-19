(function (){
	angular.module("drf-angular")
	.service('Tasks', function($http, BASE_TASKS){
	
	var Tasks = {};

	Tasks.all = function(){
		return $http.get(BASE_TASKS);
	};

	Tasks.update = function(updatedTodo){
		return $http.put(BASE_TASKS + updatedTodo.id, updatedTodo);
	};

	Tasks.delete = function(id){
		return $http.delete(BASE_TASKS + id + '/');
	};

	Tasks.addOne = function(newTask){
        return $http.post(BASE_TASKS, newTask)
    };

	return Tasks;
});
})();