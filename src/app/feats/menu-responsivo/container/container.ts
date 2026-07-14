import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Header } from './header/header';
import { SideBar } from './side-bar/side-bar';
import { Main } from './main/main';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-container',
  imports: [Header, SideBar, Main, Footer],
  templateUrl: './container.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './container.css',
})
export class Container {}
