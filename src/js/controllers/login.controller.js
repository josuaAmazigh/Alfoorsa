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
    return $http
      .post(`${API}/login`,  vm.user)
      .then((response) => {
        if(response.data.success){
          console.log('loggeado');
        }
      }, function errorCallback(response) {
        Multilingual.translate("ERROR_CODE."+response.data.code, {}  ,(messageTranslated) => {
          vm.errorMessage = messageTranslated;
        });
      });
  };
}
