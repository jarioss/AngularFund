const username: string = "Jorge Rios";
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {
/*   age: number;
  lastName: string;

  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName; */

    /* Con typeScript se puede declarar las variables de las clases dentro del constructor solo se debe poner el tipo de acceso y además se puede ahorrar la declaración con el this se puede ver en la siguiente linea de codigo*/

    constructor(public age: number, public lastName: string){}

    /*Se puede notar ademas que exige que se termine con las llaves*/

  }

const nico = new Person(26, "Rios");
nico.age;
