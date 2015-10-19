(function (){
	angular.module("drf-angular")
	.directive("addComment", function () {
		return {
			restrict: "E",
			templateUrl: "static/js/directives/add-comment.directive.html"
		};
	})
})();