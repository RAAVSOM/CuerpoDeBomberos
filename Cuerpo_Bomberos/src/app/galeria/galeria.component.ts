import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

}
