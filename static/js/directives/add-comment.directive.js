(function (){
	angular.module("ToDoList")
	.directive("addComment", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/add-comment.directive.html"
		};
	})
})();