import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

  contador: number = 0;

  incrementarValor() {
    this.contador++;
  }

  redefinirValor() {
    this.contador = 0;
  }

}
