import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({ /*Esto es un decorador y tiene la funcion de como se va a comportar las clases contenidas aqui mismo*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { /*los objetos deben tener acceso publico para traerlo desde otro componente*/
  name = 'Jorge';
  age = 26;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  /*Vamos a crear un objeto en ts */
  person = {
    name: 'Jorge',
    age: 26,
    avatar: 'https://source.unsplash.com/random'
  }
  names : string[] = [];
  newName = "";

products: Product[] = [
  {
    name: "El mejor juguete",
    price: 120,
    image: './assets/images/pexels-carolina-castilla-arias-1716861.jpg',
    category: '',
  },
  {
    name: "Iphon 13 pro max como nuevo",
    price: 1980,
    image: './assets/images/pexels-caleb-oquendo-9667337.jpg'
  },
  {
    name: "Balón futbol n°6",
    price: 95,
    image: './assets/images/pexels-pixabay-47730.jpg'
  },
  {
    name: "Trilogía del Señor de los Anillos",
    price: 250,
    image: './assets/images/pexels-vincent-ma-janssen-6958119.jpg'
  },
  {
    name: "Bicicleta  nueva marco 17, rin 29",
    price: 2500,
    image: './assets/images/pexels-mídia-3642534.jpg'
  },
  {
    name: "Muchila Roja-azul",
    price: 130,
    image: './assets/images/pexels-gursharndeep-singh-1262692.jpg'
  },

]

  toggleButton() {
    /*this.btnDisable = false; ==>>  esta funcion solo habilita si queremos habilitarlo o desabilitarlo se debe poner el estado negado, con esto si esta en true se llevara a false y viceversa*/
    this.btnDisable =!this.btnDisable; /* Esto habilita o dessabilita de acuerdo al evento utilizado */
  }
  increaseAge(){
    this.person.age += 1;
  }
  diminishAge(){
    this.person.age -= 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName() {
    this.names.push(this.newName);
    this.newName ="";
  }
  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}


