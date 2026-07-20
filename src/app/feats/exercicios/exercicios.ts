import { Component } from '@angular/core';
import { Contador } from "./contador/contador";
import { Autenticacao } from "./autenticacao/autenticacao";
import { ImagemDinamica } from "./imagem-dinamica/imagem-dinamica";

@Component({
  selector: 'app-exercicios',
  imports: [Contador, Autenticacao, ImagemDinamica],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios {}
