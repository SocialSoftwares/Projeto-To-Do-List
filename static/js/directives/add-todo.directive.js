(function (){
	angular.module("drf-angular")
	.directive("addTodo", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/add-todo.directive.html"
		};
	})
})();