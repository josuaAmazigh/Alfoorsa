angular
  .module('Alfoorsa')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/user/profile`, {
    'register': { method: 'POST', url: `${API}/register` },
    'login': { method: 'POST', url: `${API}/login` },
    'update': { method: 'PUT'}
  });
}
