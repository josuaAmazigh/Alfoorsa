angular
.module('Alfoorsa')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Multilingual'];
function MainCtrl($rootScope, CurrentUserService, $state, Multilingual){
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('home');
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('home');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

}
