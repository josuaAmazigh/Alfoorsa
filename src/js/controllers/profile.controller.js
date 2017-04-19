angular
.module('Alfoorsa')
.controller('profileCtrl', profileCtrl);

profileCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'User', '$stateParams', 'PATTERNS'];
function profileCtrl(CurrentUserService, $state, Multilingual, User, $stateParams, PATTERNS){
  const vm = this;

  if($stateParams && $stateParams.id !== null && $stateParams.id !== undefined){
    User
      .getUserById({id: $stateParams.id, user: vm.userTemp})
      .$promise
      .then(data => {
        vm.currentUser = data.user;
        vm.user = ['preferredLanguage'];
        vm.user.preferredLanguage = vm.currentUser.preferredLanguage;
        Multilingual.changeLanguage(data.user.preferredLanguage);
      }, (error) => {
        console.log(error);
      });
  }else{
    vm.currentUser = CurrentUserService.currentUser;
    vm.user = ['preferredLanguage'];
    vm.user.preferredLanguage = vm.currentUser.preferredLanguage;
  }

  vm.chooseLanguage = ['ar', 'es', 'en', 'fr'];
  //vm.fieldsSelected = ['name', 'lastname', 'phone', 'preferredLanguage', 'email'];
  vm.fieldsSelected =[
    {
      field: 'name',
      editable: true,
      pattern: PATTERNS.NAME
    },{
      field: 'lastname',
      editable: true,
      pattern: PATTERNS.NAME
    },{
      field: 'phone',
      editable: true
    },{
      field: 'preferredLanguage',
      editable: true
    },{
      field: 'email',
      editable: false
    },{
      field: 'type',
      editable: false
    }
  ];

  //These 2 lines prevent the select field from displaying an empty option


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
