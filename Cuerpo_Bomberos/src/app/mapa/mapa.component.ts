import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { EncabezadoComponent } from "../encabezado/encabezado.component";

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [FooterComponent, EncabezadoComponent],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

}
