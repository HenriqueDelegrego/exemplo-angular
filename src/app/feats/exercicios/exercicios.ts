import { Component } from '@angular/core';
import { Contador } from "./contador/contador";
import { Autenticacao } from "./autenticacao/autenticacao";
import { ImagemDinamica } from "./imagem-dinamica/imagem-dinamica";
import { ExemploSignal } from "./exemplo-signal/exemplo-signal";

@Component({
  selector: 'app-exercicios',
  imports: [Contador, Autenticacao, ImagemDinamica, ExemploSignal],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios {}
