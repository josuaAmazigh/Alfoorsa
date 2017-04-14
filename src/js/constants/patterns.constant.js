angular
  .module('Alfoorsa')
  .constant('PATTERNS', regularExpression);

const regularExpression = () => {
  // Declaración de los regex
  const name = /^[a-zA-ZàáâäãåąčćēęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĒĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$/u;

  // Devolvemos el objeto con los regex
  return {
    'NAME': new RegExp(name)
    //AQUI SE PONEN LOS OTROS REGEX
  };
};
