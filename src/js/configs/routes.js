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
    controller: 'famososCtrl as famosos'
  })
  .state('erdamatuput.users', {
    url: '/contact',
    parent: 'erdamatuput',
    templateUrl: '/js/views/famosos/users-table.html'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: '/js/views/users/profile/Profile.html',
    resolve: {needAuthentication},
    controller: 'profileCtrl as profile'
  })
  .state('profile.user', {
    url: '/user',
    parent: 'profile',
    templateUrl: '/js/views/users/profile/user_profile.html',
  });
  $urlRouterProvider.otherwise('/');
}
