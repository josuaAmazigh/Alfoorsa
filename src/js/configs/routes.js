angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('session', {
    url: '/session',
    templateUrl: '/js/views/session.html'
  })
  .state('erdamatuput', {
    url: '/eraseunavezalguienfamoso',
    templateUrl: '/js/views/famosos/los_famosos.html',
    controller: 'famososCtrl',
    controllerAS: 'famosos',
    resolve: {
      validate: function($q, $location, $state, CurrentUserService) {
        var validateAccess = $q.defer();
        if (CurrentUserService !== null && CurrentUserService.currentUser !== null && CurrentUserService.currentUser.role === 'ADMIN') {
          validateAccess.resolve();
        }else{
          $location.url('/session');
        }
        return validateAccess.promise;
      }
    }
  });
  // .state('profile', {
  //   url: '/profile',
  //   templateUrl: '',
  //   controller: 'MainCtrl',
  //   controllerAs: 'main'
  // });
  $urlRouterProvider.otherwise('/');
}
