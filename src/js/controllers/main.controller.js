angular
.module('Alfoorsa')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Multilingual'];
function MainCtrl($rootScope, CurrentUserService, $state, Multilingual){
  const vm = this;

  vm.Multilingual = Multilingual;

  vm.rootScope = $rootScope;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = CurrentUserService.currentUser;
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('session');
  };

}
