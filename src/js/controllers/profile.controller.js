angular
.module('Alfoorsa')
.controller('profileCtrl', profileCtrl);

profileCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'User', '$stateParams', 'PATTERNS'];
function profileCtrl(CurrentUserService, $state, Multilingual, User, $stateParams, PATTERNS){
  const vm = this;

  vm.chooseLanguage = ['ar', 'es', 'en', 'fr'];
  vm.fieldsSelected = ['name', 'lastname', 'phone', 'preferredLanguage'];
  vm.PATTERNS = PATTERNS;

  if($stateParams && $stateParams.id !== null && $stateParams.id !== undefined){
    User
      .getUserById({id: $stateParams.id, user: vm.userTemp})
      .$promise
      .then(data => {
        vm.currentUser = data.user;
        CurrentUserService.currentUser = data.user;
        Multilingual.changeLanguage(data.user.preferredLanguage);
      }, (error) => {
        console.log(error);
      });
  }else{
    vm.currentUser = CurrentUserService.currentUser;
  }


  vm.updateUser = () => {
    if($stateParams && $stateParams.id !== null && $stateParams.id !== undefined){
      User
        .updateUser({id: $stateParams.id, user: vm.userTemp})
        .$promise
        .then(data => {
          vm.currentUser = data.user;
          CurrentUserService.currentUser = data.user;
          Multilingual.changeLanguage(data.user.preferredLanguage);
        }, (error) => {
          console.log(error);
        });
    }else{
      User
        .update({user: vm.userTemp})
        .$promise
        .then(data => {
          vm.currentUser = data.user;
          CurrentUserService.currentUser = data.user;
          Multilingual.changeLanguage(data.user.preferredLanguage);
        }, (error) => {
          console.log(error);
        });
    }
  };

  vm.editOn = false;
  vm.editableName = 'field';

  vm.enableEditor = (field)  => {
    vm.editOn = true;
    vm.editableName = field;
  };

  vm.disableEditor = () => {
    vm.editOn = false;
  };

  vm.saveUser = (field) => {
    vm.userTemp = {[field]: vm.user[field]};
    vm.updateUser();
    vm.disableEditor();
  };


}
