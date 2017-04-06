angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'CurrentUserServiceProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider, CurrentUserServiceProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('session', {
    url: '/session',
    templateUrl: '/js/views/session.html'
  });
  // .state('erdamatuput', {
  //   url: '/eraseunavezalguienfamoso',
  //   templateUrl: '/js/views/famosos/los_famosos.html',
  //   controller: 'famososCtrl',
  //   controllerAS: 'famosos'
    // resolve: {
    //   validate: function($q, $location, CurrentUserService) {
    //     // Either you could maintain an array of hashes on client side
    //     // a user do not have access to without login
    //     // Or hit the backend url to check it more securely
    //     //console.log(CurrentUserService.currentUser);
    //     var validateAccess = $q.defer();
    //     // var isAllowed = ['profile', 'index', 'dashboard'].indexOf($location.hash()) !== -1;
    //     //
    //     // if (!isAllowed) {
    //     //   $location.path('/login');
    //     // }
    //
    //     validateAccess.resolve();
    //     return validateAccess.promise;
    //   }
    // }
  // });

  $urlRouterProvider.when('/eraseunavezalguienfamoso', ['$match', function ($match) {
    console.log('hola');
    console.log(CurrentUserServiceProvider)
    // if (window.location.replace(window.location.href, '') == 'eraseunavezalguienfamoso') {
    //     //$state.transitionTo(state, $match, false);
    //     console.log(CurrentUserService.currentUser);
    // }
  }]);
  // .state('profile', {
  //   url: '/profile',
  //   templateUrl: '',
  //   controller: 'MainCtrl',
  //   controllerAs: 'main'
  // });
  $urlRouterProvider.otherwise('/');
}
