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
          $state.go('home');
        }
      }, (err) => {
        vm.errorMessage = `ERROR_CODES.${err.data.code}`;
      });
  };
}
