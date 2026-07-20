import { Component } from '@angular/core';

@Component({
  selector: 'app-autenticacao',
  imports: [],
  templateUrl: './autenticacao.html',
  styleUrl: './autenticacao.css',
})
export class Autenticacao {

  logado = false;

  alterarEstado() {
    this.logado = !this.logado;
  }

}
