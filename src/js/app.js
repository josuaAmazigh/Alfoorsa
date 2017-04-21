angular
  .module('Alfoorsa', [
    'ui.router',
    'ngResource',
    'angular-jwt',
    'pascalprecht.translate',
    'ngCookies'
  ])
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
    .useStorage('CustomStorage')
    .useSanitizeValueStrategy('escapeParameters');
  }])
  .run(['Multilingual', '$translate', (Multilingual, $translate) => {
    const language  = $translate.storage().get($translate.storageKey());
    Multilingual.changeUIDirection(language);

    function clearConsoleLog(){
      const styleLog = `
        font-size: 7em;
        color: #4B0A3E;
      `;
      if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI;
      } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI;
      } else if (typeof console.clear !== 'undefined') {
        console.API = console;
      }
      console.API.clear();
      setTimeout(console.log.bind(console, '%cALفُRSA', styleLog), 0);
    }
    clearConsoleLog();
  }]);
