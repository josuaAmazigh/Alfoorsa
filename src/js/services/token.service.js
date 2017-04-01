angular
  .module('Alfoorsa')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window'];
function TokenService($window) {
  const self = this;

  self.urlBase64Decode = function(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0: { break; }
      case 2: { output += '=='; break; }
      case 3: { output += '='; break; }
      default: {
        throw 'Illegal base64url string!';
      }
    }
    try{
      return $window.decodeURIComponent(escape($window.atob(output)));
    }catch(err){
      return null;
    }
  };


  self.decodeToken2 = function(token) {
    let parts = token.split('.');

    if (parts.length !== 3) {
      throw new Error('JWT must have 3 parts');
    }

    let decoded = self.urlBase64Decode(parts[1]);
    if (!decoded) {
      return null;
    }

    return angular.fromJson(decoded);
  };


  self.setToken = (token) => {
    return $window.localStorage.setItem('Authorization', token);
  };

  self.getToken = () => {
    return $window.localStorage.getItem('Authorization');
  };

  self.decodeToken = () => {
    const token = self.getToken();
    let token2 = null;
    if(token){
      token2 = self.decodeToken2(token);
    }
    return token2;
  };

  self.removeToken = () => {
    $window.localStorage.clear();
  };
}
