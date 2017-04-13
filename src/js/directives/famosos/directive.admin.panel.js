angular
  .module('Alfoorsa')
  .directive('adminPanel', adminPanel);

function adminPanel(){
  var directive = {};

  //'A' == attribute, 'E' == element, 'C' == class
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl =  'js/views/famosos/admin-panel.html';
  return directive;
}
