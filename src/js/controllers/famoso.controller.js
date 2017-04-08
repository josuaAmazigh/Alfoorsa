angular
.module('Alfoorsa')
.controller('famososCtrl', famososCtrl);

famososCtrl.$inject = ['CurrentUserService', '$state', 'Multilingual', 'Users'];
function famososCtrl(CurrentUserService, $state, Multilingual, Users){
  const vm = this;

  if(CurrentUserService.currentUser.role !== 'ADMIN'){
    $state.go('home');
  }

  vm.getUsers = () => {
    Users
    .get()
    .$promise
    .then(data => {
      console.log(data);
      vm.listUsers = data.users;
      vm.countReviews(data.users.needreview);
    }, function errcalback(error){
      console.log(error);
    });
  };

  vm.countReviews = (reviews) => {
    let array_reviews = [];
    array_reviews.push(reviews);
    if(array_reviews.indexOf(false) !== -1){
      return array_reviews.length;
    }
  };
}
