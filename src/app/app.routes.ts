import { Routes } from '@angular/router';
import { Contato } from './feats/contato/contato';
import { Home } from './feats/home/home';
import { MenuResponsivo } from './feats/menu-responsivo/menu-responsivo';

export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: 'menu-responsivo', component: MenuResponsivo },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
