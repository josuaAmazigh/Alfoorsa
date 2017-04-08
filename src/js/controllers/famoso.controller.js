angular
.module('Alfoorsa')
.controller('famososCtrl', famososCtrl);

famososCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'Users'];
function famososCtrl(CurrentUserService, $state, Multilingual, Users){
  const vm = this;

  if(CurrentUserService.currentUser.role !== 'ADMIN'){
    $state.go('home');
  }

  vm.getUsers = () => {
    Users
    .get()
    .$promise
    .then(data => {
      console.log(data);
    });
  };
}
