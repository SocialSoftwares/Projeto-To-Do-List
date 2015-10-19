(function (){
	angular.module('ToDoList')
	.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

	$locationProvider.html5Mode(true);
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/static/partials/home.html',
		})
		
	$urlRouterProvider.otherwise('/');
});
})();