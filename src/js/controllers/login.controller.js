angular
.module('Alfoorsa')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$state', '$http', 'API', 'Multilingual', 'URL', 'CustomMethods', 'TokenService', 'CurrentUserService'];
function LoginCtrl($state, $http, API, Multilingual, URL, CustomMethods, TokenService, CurrentUserService){
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
          CurrentUserService.getUser();
        }
      }, function errorCallback(response) {
        Multilingual.translate("ERROR_CODES."+response.data.code, {}  ,(messageTranslated) => {
          vm.errorMessage = messageTranslated;
          console.log(response.data.code);
          console.log(messageTranslated);
        });
      });
  };
}
