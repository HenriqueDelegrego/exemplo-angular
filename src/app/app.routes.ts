import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { MenuResponsivo } from './feats/menu-responsivo/menu-responsivo';
import { Event } from './feats/event/event';

export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: 'menu-responsivo', component: MenuResponsivo },
    { path: 'event', component: Event },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
