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

  vm.editOn = false;
  vm.editableName = 'field';

  vm.enableEditor = function(field) {
    vm.editOn = true;
    vm.editableName = field;
  };

  vm.disableEditor = function() {
    vm.editOn = false;
  };

  vm.saveUser = function() {
    vm.title = vm.editableName;
    vm.disableEditor();
  };

}
