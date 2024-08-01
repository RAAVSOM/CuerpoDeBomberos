import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-prevencion',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './prevencion.component.html',
  styleUrl: './prevencion.component.css'
})
export class PrevencionComponent {

}
