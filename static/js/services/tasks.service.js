(function (){
	angular.module("ToDoList")
	.service('Tasks', function($http, BASE_TASKS){
	
	var Tasks = {};

	Tasks.all = function(){
		return $http.get(BASE_TASKS);
	};

	Tasks.update = function(updatedTask){
		return $http.put(BASE_TASKS + updatedTask.id, updatedTask);
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
