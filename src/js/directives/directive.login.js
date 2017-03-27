angular
  .module('Alfoorsa')
  .directive('loginForm', login);

function login(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "js/views/login_form.html";
  // directive.scope = {
  //     question: '='
  // };
  return directive;
}
