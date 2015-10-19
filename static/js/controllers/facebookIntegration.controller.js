(function (){
  //Pega o nome e ID do usuário quando ele loga no Facebook e limpa seus dados
  //quando sai do sistema
  
  angular.module("drf-angular")
  .controller('FacebookIntegrationController', function($rootScope, $scope, facebookUser, $http) {
    $rootScope.loggedInUser = {};

    var viewController = this;

    viewController.loggedInUser = undefined;

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          viewController.loggedInUser = response;
            
          $rootScope.$broadcast("getLists", viewController.loggedInUser);
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        viewController.loggedInUser = {};
        $rootScope.$broadcast("cleanTodos");
      });
    });
  });
})();