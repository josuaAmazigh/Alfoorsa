angular
.module('Alfoorsa')
.controller('famososCtrl', famososCtrl);

famososCtrl.$inject = ['$rootScope','CurrentUserService', '$state', 'Multilingual', 'User', '$window'];
function famososCtrl($rootScope, CurrentUserService, $state, Multilingual, User, $window){
  const vm = this;

  if(CurrentUserService.currentUser.role !== 'ADMIN'){
    $state.go('home');
  }

  $rootScope.sortType     = 'name'; // set the default sort type
  $rootScope.sortReverse  = false;  // set the default sort order

  vm.getUsers = () => {
    User
    .getAll()
    .$promise
    .then(data => {
      console.log(data);
      vm.listUsers = data.users;
      vm.countReviews(data.users.needreview);
    }, (error) => {
      console.log(error);
    });
  };
  vm.openUser = (userId) => {
    const win = $state.href('cnt', { id: userId});
    $window.open(win);
  };

  vm.countReviews = (reviews) => {
    const arrayReviews = [];
    arrayReviews.push(reviews);
    if(arrayReviews.indexOf(false) !== -1){
      return arrayReviews.length;
    }
  };
}
