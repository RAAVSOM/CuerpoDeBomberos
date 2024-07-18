import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-organigrama',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './organigrama.component.html',
  styleUrl: './organigrama.component.css'
})
export class OrganigramaComponent {

}
