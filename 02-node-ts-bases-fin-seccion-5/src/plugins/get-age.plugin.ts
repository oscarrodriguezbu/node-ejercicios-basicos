// const getAgePlugin = require('get-age');

//* PATRON ADAPTADOR, ES POR SI QUEREMOS CAMBIAR O ACTUALIZAR LOS PAQUETES DE TERCERO SIN NINGUN PROBLEMA
export const getAge = ( birthdate: string ) => {

  // return getAgePlugin(birthdate); // es la manera en que se tiena el age con un paquete de terceros
  // console.log({ currentYear: new Date().getFullYear() });


  return new Date().getFullYear() - new Date(birthdate).getFullYear(); // forma actualizada con new date
}
