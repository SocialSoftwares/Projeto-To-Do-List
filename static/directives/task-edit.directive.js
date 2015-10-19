(function (){
	angular.module("drf-angular")
	.directive("taskEdit", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/task-edit.directive.html"
		};
	})
})();