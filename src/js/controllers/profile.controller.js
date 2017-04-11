angular
.module('Alfoorsa')
.controller('profileCtrl', profileCtrl);

profileCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'User'];
function profileCtrl(CurrentUserService, $state, Multilingual, User){
  const vm = this;

  vm.currentUser = CurrentUserService.currentUser;

  vm.updateUser = () => {
    User
    .update()
    .$promise
    .then(data => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  };



}
