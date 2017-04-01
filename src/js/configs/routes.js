angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/js/views/home.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('index', {
    url: '/',
    templateUrl: 'index.html'
  });
  $urlRouterProvider.otherwise('/');
}
