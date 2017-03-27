angular
  .module('Alfoorsa', [
    'ui.router',
    'ngResource',
    'angular-jwt',
    'pascalprecht.translate',
    'ngCookies'
  ])
  .run(['$rootScope', function($rootScope) {
    $rootScope.lang = 'en';

    $rootScope.default_float = 'left';
    $rootScope.opposite_float = 'right';

    $rootScope.default_direction = 'ltr';
    $rootScope.opposite_direction = 'rtl';
    }])

  .config(['$translateProvider', function($translateProvider) {
    $translateProvider
    .useStaticFilesLoader({
      prefix: '../translations/local-',
      suffix: '.json'
    })
    .determinePreferredLanguage(function(){
      const validLanguages = ['es','fr', 'ar', 'en'];

      if(navigator && navigator.languages && navigator.languages.length > 0 && validLanguages.indexOf(navigator.languages[0].substr(0, 2)) > -1){
        return navigator.languages[0].substr(0, 2);
      }
      if(navigator && navigator.language && validLanguages.indexOf(navigator.language.substr(0, 2)) > -1){
        return navigator.language.substr(0, 2);
      }
      if(navigator && navigator.browserLanguage && validLanguages.indexOf(navigator.browserLanguage.substr(0, 2)) > -1){
        return navigator.browserLanguage.substr(0, 2);
      }
      if(navigator && navigator.systemLanguage && validLanguages.indexOf(navigator.systemLanguage.substr(0, 2)) > -1){
        return navigator.systemLanguage.substr(0, 2);
      }
      if(navigator && navigator.userLanguage && validLanguages.indexOf(navigator.userLanguage.substr(0, 2)) > -1){
        return navigator.userLanguage.substr(0, 2);
      }
      return 'en'; // default language english
    })
    .useSanitizeValueStrategy(null);
  }]);
