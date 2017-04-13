angular
  .module('Alfoorsa')
  .directive('loginRegister', loginRegister);

function loginRegister(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  '/views/loginRegister/login_register_form.html';
  return directive;
}
