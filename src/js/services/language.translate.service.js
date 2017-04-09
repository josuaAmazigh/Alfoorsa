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
    vm.changeUIDirection(data.language);
  });

  vm.changeUIDirection = (language) =>{
    $rootScope.lang               = language;
    $rootScope.default_direction  = language === 'ar' ? 'rtl' : 'ltr';
    $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';
    $rootScope.default_float      = language === 'ar' ? 'right' : 'left';
    $rootScope.opposite_float     = language === 'ar' ? 'left' : 'right';
    $rootScope.default_move       = language === 'ar' ? 'mr-auto' : 'ml-auto';
    $rootScope.opposite_move      = language === 'ar' ? 'ml-auto' : 'mr-auto';
  };
}
