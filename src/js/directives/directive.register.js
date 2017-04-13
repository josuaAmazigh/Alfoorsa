angular
  .module('Alfoorsa')
  .directive('registerForm', register);

function register(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  '/views/loginRegister/register_form.html';
  return directive;
}
