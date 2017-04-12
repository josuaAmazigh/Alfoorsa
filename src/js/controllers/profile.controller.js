angular
.module('Alfoorsa')
.controller('profileCtrl', profileCtrl);

profileCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'User', '$stateParams'];
function profileCtrl(CurrentUserService, $state, Multilingual, User, $stateParams){
  const vm = this;
  if($stateParams && $stateParams.id !== null){
    User
      .getUserById({id: $stateParams.id})
      .$promise
      .then(data => {
        vm.currentUser = data.user;
      }, (error) => {
        console.log(error);
      });
  }else{
    vm.currentUser = CurrentUserService.currentUser;
  }


  vm.updateUser = () => {
    if($stateParams && $stateParams.id !== null){
      User
        .updateUser({id: $stateParams.id})
        .$promise
        .then(data => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
    }else{
      User
        .update()
        .$promise
        .then(data => {
          console.log(data);
        }, (error) => {
          console.log(error);
        });
    }
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
