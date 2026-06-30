import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa-component',
  imports: [],
  templateUrl: './pessoa-component.html',
  styleUrl: './pessoa-component.css',
})
export class PessoaComponent {

  pessoa1: Pessoa = {
    nome: 'João',
    sexo: 'Masculino',
    dataNascimento: '19/03/2000',
    estadoCivil: 'Casado'
  };

  pessoa2: Pessoa = {
    nome: 'Ana',
    sexo: 'Feminino',
    dataNascimento: '25/09/2004',
    estadoCivil: 'Solteiro'
  };

}
