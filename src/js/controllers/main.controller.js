angular
.module('Alfoorsa')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Multilingual'];
function MainCtrl($rootScope, CurrentUserService, $state, Multilingual){
  const vm = this;

  $rootScope.Multilingual = Multilingual;

  vm.rootScope = $rootScope;

  $rootScope.$on('loggedIn', () => {
    $rootScope.CurrentUserService = CurrentUserService;
  });

  $rootScope.$on('loggedOut', () => {
    $rootScope.CurrentUserService = CurrentUserService;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('session');
  };

}
