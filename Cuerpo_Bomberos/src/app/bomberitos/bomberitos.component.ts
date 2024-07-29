import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
  selector: 'app-bomberitos',
  standalone: true,
  imports: [EncabezadoComponent],
  templateUrl: './bomberitos.component.html',
  styleUrl: './bomberitos.component.css'
})
export class BomberitosComponent {

}
