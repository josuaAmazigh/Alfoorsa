angular
.module('Alfoorsa')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$state', '$http', 'API', 'Multilingual', 'URL', 'CustomMethods', 'TokenService'];
function LoginCtrl($state, $http, API, Multilingual, URL, CustomMethods, TokenService){
  const vm = this;

  vm.Multilingual  = Multilingual;


  vm.errorMessage = '';

  vm.login = () => {
    CustomMethods.quitarEspacios(vm.user);
    TokenService.removeToken();
    return $http
      .post(`${API}/login`,  vm.user)
      .then((response) => {
        if(response.data.success){
          $state.go('home');
        }
      }, function errorCallback(response) {
        Multilingual.translate("ERROR_CODE."+response.data.code, {}  ,(messageTranslated) => {
          vm.errorMessage = messageTranslated;
        });
      });
  };
}
