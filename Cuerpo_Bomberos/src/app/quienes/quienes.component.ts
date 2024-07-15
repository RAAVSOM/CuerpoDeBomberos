import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quienes',
  standalone: true,
  imports: [EncabezadoComponent, RouterModule],
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.css'
})
export class QuienesComponent {

}
