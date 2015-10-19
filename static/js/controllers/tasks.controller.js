(function (){
	angular.module("drf-angular")
	.controller('TasksController', function($scope, $state, Tasks, $rootScope){
		var viewController = this;

		viewController.tasks = {};
		viewController.newTask = {};

		this.addTask = function(todoId) {
			viewController.newTask.todo = todoId;
			Tasks.addOne(viewController.newTask)
				.then(function(res){
					// redirect to homepage once added
					viewController.tasks.push(res.data);
				});
		};

		this.toggleCompleted2 = function(task) {
			Tasks.update(task);
		};

		this.deleteTask = function(id){
			Tasks.delete(id);
			// update the list in ui
			viewController.tasks = viewController.tasks.filter(function(task){
				return task.id !== id;
			});
		};
		
		Tasks.all().then(function(res){
			viewController.tasks = res.data;
			viewController.tasks = viewController.tasks.filter(function(task){
				return $scope.todo.id == task.todo;
			});
		});
	});
})();