import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesComponent } from './quienes/quienes.component';
import { LocalizacionesComponent } from './localizaciones/localizaciones.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';
import { InstructivoComponent } from './instructivo/instructivo.component';
import { RangosComponent } from './rangos/rangos.component';
import { TenienteComponent } from './rangos/teniente/teniente.component';
import { SargentoComponent } from './rangos/sargento/sargento.component';
import { CaboComponent } from './rangos/cabo/cabo.component';
import { BomberosComponent } from './rangos/bomberos/bomberos.component';
import { BomberitosComponent } from './bomberitos/bomberitos.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'quienes', component: QuienesComponent},
    {path: 'localizaciones', component: LocalizacionesComponent},
    {path: 'organigrama', component: OrganigramaComponent},
    {path: 'instructivo', component: InstructivoComponent},
    {path: 'rangos', component: RangosComponent},
    {path: 'teniente', component: TenienteComponent},
    {path: 'sargento', component: SargentoComponent},
    {path: 'cabo', component: CaboComponent},
    {path: 'bomberos', component: BomberosComponent},
    {path: 'bomberitos', component: BomberitosComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
