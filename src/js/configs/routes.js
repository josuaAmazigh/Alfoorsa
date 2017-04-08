angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  const needAuthentication = (User, CurrentUserService) => {
    return (
      User
        .get()
        .$promise
        .then(data => {
          CurrentUserService.currentUser = data.user;
        })
    );
  };

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
    resolve: {needAuthentication},
    controller: 'famososCtrl',
    controllerAs: 'famosos'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: '/js/views/users/user_profile.html',
    resolve: {needAuthentication},
    controller: 'profileCtrl',
    controllerAs: 'profile'
  });
  $urlRouterProvider.otherwise('/');
}
