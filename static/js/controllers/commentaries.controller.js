(function (){
	angular.module("ToDoList")
	.controller('CommentariesController', function($scope, $state, Commentaries, $rootScope){
		
		var viewController = this;

		viewController.comments = {};
		viewController.newComment = {};

		this.addComment = function(taskId) {
			viewController.newComment.task = taskId;

			Commentaries.addOne(viewController.newComment)
				.then(function(res){
					// redirect to homepage once added
					viewController.comments.push(res.data);
				});
		};

		this.deleteComment = function(id){
			Commentaries.delete(id);
			// update the list in ui
			viewController.comments = viewController.comments.filter(function(comment){
				return comment.id !== id;
			});
		};
		
		Commentaries.all().then(function(res){
			viewController.comments = res.data;
			viewController.comments = viewController.comments.filter(function(comment){
				return $scope.task.id == comment.task;
			});
		});
	});
})();