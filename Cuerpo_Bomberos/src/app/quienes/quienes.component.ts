import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-quienes',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.css'
})
export class QuienesComponent {

}
