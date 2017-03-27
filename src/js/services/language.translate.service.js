angular
  .module('Alfoorsa')
  .service('Multilingual', Multilingual);


Multilingual.$inject = ['$rootScope', '$translate'];
function Multilingual($rootScope, $translate) {
  const vm = this;

  vm.changeLanguage = function(langKey) {
    $translate.use(langKey);
  };

  vm.translate = (ID, params, callback) => {
    $translate(ID, params).then(callback);
  };


  $rootScope.$on('$translateChangeSuccess', function(event, data) {

    var language = data.language;

    $rootScope.lang = language;

    $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
    $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';

    $rootScope.default_float = language === 'ar' ? 'right' : 'left';
    $rootScope.opposite_float = language === 'ar' ? 'left' : 'right';

  });
}
