import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesComponent } from './quienes/quienes.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'quienes', component: QuienesComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
