(function (){
	angular.module("drf-angular")
	.controller('TodosController', function($scope, Todos, $state, $http){
		var viewController = this;

		viewController.todos = {};
		viewController.newTodo = {};

		this.addTodo = function(userId) {
			viewController.newTodo.uid = userId;

			Todos.addOne(viewController.newTodo)
				.then(function(res){
					// redirect to homepage once added
					viewController.todos.push(res.data);
				});
		};

		this.toggleCompleted = function(todo) {
			Todos.update(todo);
		};

		this.deleteTodo = function(id){
			Todos.delete(id);
			// update the list in ui
			viewController.todos = viewController.todos.filter(function(todo){
				return todo.id !== id;
			})
		};

		$scope.$on("getLists", function(event, loggedInUser){
			Todos.all().then(function(res){
				viewController.todos = res.data;
				viewController.todos = viewController.todos.filter(function(todo){
					return loggedInUser.id == todo.uid;
				});
			});
		 });

		$scope.$on("cleanTodos", function(){
			viewController.todos = {};
		});		
	});
})();