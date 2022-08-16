import { Component } from '@angular/core';

@Component({ /*Esto es un decorador y tiene la funcion de como se va a comportar las clases contenidas aqui mismo*/
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { /*los objetos deben tener acceso publico para traerlo desde otro componente*/
  name = 'Jorge';
  age = 26;
  img = "./imagenes/pexels-akın-akdağ-10953441.jpg";

}
