import { Component } from '@angular/core';

@Component({
  selector: 'app-introducao',
  imports: [],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css',
})
export class Introducao {

  nome: string = 'Henrique';
  idade: number = 24;
  cidade: string = 'Blumenau'
  emprego: string = 'Professor'

}
