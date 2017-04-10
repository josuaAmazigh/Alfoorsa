angular
  .module('Alfoorsa')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'User', 'CustomStorage'];
function CurrentUserService(TokenService, $rootScope, User, CustomStorage) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    if (decoded) {
      User
        .get()
        .$promise
        .then(data => {
          self.currentUser = data.user;
          CustomStorage.put('',  data.user.preferredLanguage);
          $rootScope.Multilingual.changeLanguage(data.user.preferredLanguage);
          $rootScope.$broadcast('loggedIn');
        });
    }else{
      TokenService.removeToken();
    }
  };

  self.getUser();

  self.removeUser = () => {
    self.currentUser = null;
    TokenService.removeToken();
    $rootScope.$broadcast('loggedOut');
  };
}
