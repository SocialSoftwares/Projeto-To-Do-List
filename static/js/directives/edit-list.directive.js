(function (){
	angular.module("ToDoList")
	.directive("editList", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/edit-list.directive.html"
		};
	})
})();