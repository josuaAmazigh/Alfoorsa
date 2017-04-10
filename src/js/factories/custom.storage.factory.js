angular
.module('Alfoorsa')
.factory('CustomStorage', CustomStorage);

CustomStorage.$inject = ['$window'];
function CustomStorage($window) {
  const KEY_NAME = 'lng_key_';
  return {
    put: (name, value) => {
      return $window.localStorage.setItem(KEY_NAME, value);
    },
    get: () => {
      return $window.localStorage.getItem(KEY_NAME);
    }
  };
}
