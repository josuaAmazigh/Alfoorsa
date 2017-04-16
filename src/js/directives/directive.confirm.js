angular
.module('Alfoorsa')
.directive('ngConfirmMessage',  ngConfirmMessage);

function ngConfirmMessage() {
  return {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.on('click', function (e) {
        var message = attrs.ngConfirmMessage || 'Are you sure ?';
        if (!confirm(message)) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      });
    }
  };
}
