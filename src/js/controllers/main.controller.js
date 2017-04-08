angular
.module('Alfoorsa')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  const vm = this;

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
