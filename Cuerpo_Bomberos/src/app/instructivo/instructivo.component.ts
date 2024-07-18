import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-instructivo',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './instructivo.component.html',
  styleUrl: './instructivo.component.css'
})
export class InstructivoComponent {

}
