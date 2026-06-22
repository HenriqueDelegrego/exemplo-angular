import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuComponente } from './meu-componente/meu-componente';
import { Valores } from "./valores/valores";
import { Introducao } from "./introducao/introducao";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MeuComponente, Valores, Introducao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exemplo-angular');
}
