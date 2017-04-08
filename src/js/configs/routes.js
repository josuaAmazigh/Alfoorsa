angular
.module('Alfoorsa')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  const needAuthentication = (User) => {
    return (
      User
        .get()
        .$promise
        .then(data => {
          self.currentUser = data.user;
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
  });
  // .state('profile', {
  //   url: '/profile',
  //   templateUrl: '',
  //   controller: 'MainCtrl',
  //   controllerAs: 'main'
  // });
  $urlRouterProvider.otherwise('/');
}
