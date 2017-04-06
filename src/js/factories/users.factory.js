angular
  .module('Alfoorsa')
  .factory('Users', usersFactory);

usersFactory.$inject = ['API', '$resource'];
function usersFactory(API, $resource){
  return $resource(`${API}/users`, {
    'update': { method: 'PUT'}
  });
}
