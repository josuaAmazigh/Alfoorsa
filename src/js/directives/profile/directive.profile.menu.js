angular
  .module('Alfoorsa')
  .directive('profileMenu', profileMenu);

function profileMenu(){
  var directive = {};
  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  '/views/users/profile/user_menu.html';
  return directive;
}
