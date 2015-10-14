(function (){
  //Pega o nome e ID do usuário quando ele é loga no Facebook e limpa seus dados
  //quando sai do sistema
  
  angular.module("ToDoList")
  .controller('RootCtrl', function($rootScope, $scope, facebookUser) {
    $rootScope.loggedInUser = {};

    $rootScope.$on('fbLoginSuccess', function(name, response) {
      facebookUser.then(function(user) {
        user.api('/me').then(function(response) {
          $rootScope.loggedInUser = response;
        });
      });
    });

    $rootScope.$on('fbLogoutSuccess', function() {
      $scope.$apply(function() {
        $rootScope.loggedInUser = {};
      });
    });
  });
})();