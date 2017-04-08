angular
  .module('Alfoorsa')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/user/profile`, {
    'update': { method: 'PUT'}
  });
}
