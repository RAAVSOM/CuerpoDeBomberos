import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesComponent } from './quienes/quienes.component';
import { LocalizacionesComponent } from './localizaciones/localizaciones.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { RangosComponent } from './rangos/rangos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'quienes', component: QuienesComponent},
    {path: 'localizaciones', component: LocalizacionesComponent},
    {path: 'organigrama', component: OrganigramaComponent},
    {path: 'instructivo', component: InstructivoComponent},
    {path: 'rangos', component: RangosComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
