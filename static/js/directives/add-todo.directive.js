(function (){
	angular.module("ToDoList")
	.directive("addTodo", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/add-todo.directive.html"
		};
	})
})();