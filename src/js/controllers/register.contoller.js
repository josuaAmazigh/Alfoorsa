angular
.module('Alfoorsa')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$state', '$http', 'API', 'Multilingual', 'URL', 'CustomMethods'];
function RegisterCtrl($state, $http, API, Multilingual, URL, CustomMethods){
  const vm = this;

  vm.Multilingual = Multilingual;

  vm.passwordMatch = (registerform) => {
    return !(registerform.password && registerform.password_confirmation && registerform.password.$viewValue === registerform.password_confirmation.$viewValue);
  };

  vm.errorMessage = '';

  vm.registeros = () => {
    CustomMethods.quitarEspacios(vm.user);
    // let url = `${URL}/activation/3242343423432supertoken`;
    // Multilingual.translate('REGISTER_FORM.EMAIL_ACTIVACTION_MESSAGE',{name: vm.user.name, url_activation: url}  ,(id) => {
    //   vm.user.message = id;
    //   postMail(vm.user);
    // });
    return $http
      .post(`${API}/register`, { user: vm.user })
      .then((response) => {
        if(response.data.success){
          vm.user.token = response.data.token;
          const url = `${URL}/activation/${response.data.token}`;
          Multilingual.translate('REGISTER_FORM.EMAIL_ACTIVACTION_MESSAGE',{name: vm.user.name, url_activation: url}  ,(id) => {
            vm.user.message = id;
            postMail(vm.user);
          });
          vm.errorMessage = '';
        }
      }, (err) => {
        vm.errorMessage = `ERROR_CODES.${err.data.code}`;
        throw err;
      });
  };
  vm.postData = {};

  var postMail = (contact) => {
    // wrap all your input values in $scope.postData
    vm.postData = angular.copy(contact);

    $http.post('/mail', vm.postData);
    // .success(function(data) {
    //   console.log(data);
    // })
    // .error(function(data) {
    //   console.log('error');
    // });
  };
}
