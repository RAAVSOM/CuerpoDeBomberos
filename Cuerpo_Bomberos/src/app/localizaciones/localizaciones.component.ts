import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-localizaciones',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './localizaciones.component.html',
  styleUrl: './localizaciones.component.css'
})
export class LocalizacionesComponent {

}
