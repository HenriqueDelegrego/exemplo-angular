import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Container } from './container/container';

@Component({
  selector: 'app-menu-responsivo',
  imports: [Container],
  templateUrl: './menu-responsivo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './menu-responsivo.css',
})
export class MenuResponsivo {}
