angular
.module('Alfoorsa')
.controller('profileCtrl', profileCtrl);

profileCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'User', '$stateParams', 'PATTERNS'];
function profileCtrl(CurrentUserService, $state, Multilingual, User, $stateParams, PATTERNS){
  const vm = this;


  vm.fieldsSelected = ['name', 'lastname', 'phone', 'preferredLanguage'];

  vm.PATTERNS = PATTERNS;

  if($stateParams && $stateParams.id !== null && $stateParams.id !== undefined){
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
    if($stateParams && $stateParams.id !== null && $stateParams.id !== undefined){
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
        .update({user: vm.userTemp})
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

  vm.saveUser = function(field) {
    console.log(field);
    vm.userTemp = {[field]: field};
    //vm.userTemp[field] = vm.user[field];
    console.log(vm.user);
    console.log(vm.userTemp);
    console.log(eval("profileform_"+field)[field].value);
    // vm.updateUser();
    // vm.disableEditor();
  };

}
