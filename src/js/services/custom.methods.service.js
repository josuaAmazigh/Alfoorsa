angular
  .module('Alfoorsa')
  .service('CustomMethods', CustomMethods);


CustomMethods.$inject = [];
function CustomMethods() {
  const vm = this;

 vm.quitarEspacios = (obj) => {
    for ( let prop in obj){
      obj[prop] = quitarEspaciosInternos(obj[prop]);
      obj[prop].trim();
    }
    return obj;
  };

  function quitarEspaciosInternos(prop){
    if(prop.indexOf('  ') > -1){
      prop = prop.replace('  ', ' ');
      return quitarEspaciosInternos(prop);
    }
    return prop;
  }

}
