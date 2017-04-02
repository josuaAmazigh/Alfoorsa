angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('session', {
    url: '/session',
    templateUrl: '/js/views/session.html'
  });
  // .state('profile', {
  //   url: '/profile',
  //   templateUrl: '',
  //   controller: 'MainCtrl',
  //   controllerAs: 'main'
  // });
  $urlRouterProvider.otherwise('/');
}
