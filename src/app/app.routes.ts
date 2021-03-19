import { ArticoloComponent } from './components/articolo/articolo.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EsempioComponent } from './components/esempio/esempio.component';

export const contentRoutes: Routes = [
  { path: 'login', outlet: 'content', component: LoginComponent },
  { path: 'esempio', outlet: 'content', component: EsempioComponent },
  { path: 'articoli', outlet: 'content', component: ArticoloComponent },
  { path: 'carrello', outlet: 'content', component: CarrelloComponent },
];

export const navbarRoutes: Routes = [
  { path: 'main', outlet: 'navbar', component: NavbarComponent },
];

export const routes: Routes = [...contentRoutes, ...navbarRoutes];
