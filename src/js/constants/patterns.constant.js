angular
  .module('Alfoorsa')
  .constant('PATTERNS', regularExpression);

const regularExpression = () => {
  // Declaración de los regex
  const name = /^[a-zء-يàáâäãåąčćēęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĒĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð '-]{2,}$/ui;

  // Devolvemos el objeto con los regex
  return {
    'NAME': new RegExp(name)
    //AQUI SE PONEN LOS OTROS REGEX
  };
};
