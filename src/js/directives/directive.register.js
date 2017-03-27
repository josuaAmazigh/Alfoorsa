angular
  .module('Alfoorsa')
  .directive('registerForm', register);

function register(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "js/views/register_form.html";
  // directive.scope = {
  //     question: '='
  // };
  return directive;
}
