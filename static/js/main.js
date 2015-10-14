(function () {
  //Inicialização da API do Facebook
  angular.module('ToDoList', ['facebookUtils', 'ngRoute'])
  .constant('facebookConfigSettings', {
    'routingEnabled' : true,
    'channelFile'    : 'static/partials/channel.html',
    'appID'          : '1694220437474875'
  })
  .config(function($routeProvider, $locationProvider) {
  	//Para não ter de precisar usar # nas urls
  	$locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl : 'static/partials/principal.html',
    })
    .otherwise({
      redirectTo  : '/'
    });
  });
})();