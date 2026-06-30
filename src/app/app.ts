import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { Introducao } from "./introducao/introducao";
import { EnderecoComponent } from "./endereco-component/endereco-component";
import { PessoaComponent } from "./pessoa-component/pessoa-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente, Introducao, EnderecoComponent, PessoaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exemplo-angular');
}
