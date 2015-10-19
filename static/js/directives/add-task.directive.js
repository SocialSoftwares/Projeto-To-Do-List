(function (){
	angular.module("ToDoList")
	.directive("addTask", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/add-task.directive.html"
		};
	});
})();