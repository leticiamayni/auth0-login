import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
//import { authGuardFn } from '@auth0/auth0-angular';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: UserPageComponent},
    {path: '', component: HomeComponent}
];

//colocar routerLink no nav bar component