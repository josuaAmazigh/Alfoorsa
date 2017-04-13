angular
  .module('Alfoorsa')
  .factory('User', userFactory);

userFactory.$inject = ['API', '$resource'];
function userFactory(API, $resource){
  return $resource(`${API}/user/profile`, { id: '@id'}, {
    'getUserById': {method: 'GET', url: `${API}/user/:id`},
    'getAll': {method: 'GET', url: `${API}/users`},
    'updateUser': {method: 'PUT', url: `${API}/user/:id`},
    'updateProfile': {method: 'PUT'},
    'update': { method: 'PUT'}
  });
}
