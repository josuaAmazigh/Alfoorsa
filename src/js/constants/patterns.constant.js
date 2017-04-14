angular
  .module('Alfoorsa')
  .constant('PATTERNS', regularExpression);

function regularExpression(){
  // Declaración de los regex
  const name = /^[a-zء-يàáâäãåąčćēęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĒĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]{2,}$/;

  // Devolvemos el objeto con los regex
  return {
    'NAME': new RegExp(name,'ui')
    //AQUI SE PONEN LOS OTROS REGEX
  };
}
