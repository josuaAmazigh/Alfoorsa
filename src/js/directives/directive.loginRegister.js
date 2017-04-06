angular
  .module('Alfoorsa')
  .directive('loginRegister', loginRegister);

function loginRegister(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "js/views/loginRegister/login_register_form.html";
  // directive.scope = {
  //     question: '='
  // };
  return directive;
}
