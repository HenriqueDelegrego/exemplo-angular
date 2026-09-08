import { Component, inject, signal } from '@angular/core';
import { ConsumoHttpService } from '../consumo-http-service';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-get-request',
  imports: [FormField],
  templateUrl: './get-request.html',
  styleUrl: './get-request.css',
})
export class GetRequest {

  protected readonly consumoService = inject(ConsumoHttpService);

  protected recarregarPosts() {
    this.consumoService.postsDetails.reload();
  }

  protected readonly pesquisaModel = signal<string>('');

  protected readonly pesquisaForm = form(this.pesquisaModel);

  protected filtrarPosts(event: SubmitEvent) {
    event.preventDefault();

    this.consumoService.userId.set(this.pesquisaModel());
  }

}
