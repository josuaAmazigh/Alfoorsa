angular
  .module('Alfoorsa')
  .directive('navbar', navbar);

function navbar(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  "js/views/navbar.html";
  // directive.scope = {
  //     question: '='
  // };
  return directive;
}
