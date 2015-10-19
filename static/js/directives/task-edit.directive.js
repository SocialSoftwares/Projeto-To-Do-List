(function (){
	angular.module("ToDoList")
	.directive("taskEdit", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/task-edit.directive.html"
		};
	})
})();