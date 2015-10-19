(function (){
	angular.module("ToDoList")
	.service('Commentaries', function($http, BASE_COMMENTS){
	
	var Commentaries = {};

	Commentaries.all = function(){
		return $http.get(BASE_COMMENTS);
	};

	Commentaries.delete = function(id){
		return $http.delete(BASE_COMMENTS + id + '/');
	};

	Commentaries.addOne = function(newCommentary){
        return $http.post(BASE_COMMENTS, newCommentary)
    };

	return Commentaries;
});
})();