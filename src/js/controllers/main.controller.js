angular
.module('Alfoorsa')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state, User, Meal, Category, Order){
  const vm = this;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('home');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

}
