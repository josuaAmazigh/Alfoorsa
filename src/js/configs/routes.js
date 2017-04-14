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
    templateUrl: '/views/home.html'
  })
  .state('session', {
    url: '/session',
    templateUrl: '/views/session.html'
  })
  .state('erdamatuput', {
    url: '/eraseunavezalguienfamoso',
    templateUrl: '/views/famosos/los_famosos.html',
    resolve: {needAuthentication},
    controller: 'famososCtrl as famosos'
  })
  .state('erdamatuput.users', {
    url: '/contact',
    parent: 'erdamatuput',
    templateUrl: '/views/famosos/users-table.html'
  })
  .state('cnt', {
    url: '/cnt/:id',
    templateUrl: '/views/users/profile/user_profile.html',
    controller: 'profileCtrl as profile'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: '/views/users/profile/Profile.html',
    resolve: {needAuthentication},
    controller: 'profileCtrl as profile'
  })
  .state('profile.user', {
    url: '/user',
    parent: 'profile',
    controller: 'profileCtrl as profile',
    templateUrl: '/views/users/profile/user_profile.html'
  });
  $urlRouterProvider.otherwise('/');
}
