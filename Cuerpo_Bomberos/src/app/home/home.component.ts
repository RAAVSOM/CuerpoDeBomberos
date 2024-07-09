import { Component } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EncabezadoComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
