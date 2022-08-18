import { Component } from '@angular/core';

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
}


