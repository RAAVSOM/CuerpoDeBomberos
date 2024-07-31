import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { EncabezadoComponent } from "../../encabezado/encabezado.component";

@Component({
  selector: 'app-teniente',
  standalone: true,
  imports: [FooterComponent, EncabezadoComponent],
  templateUrl: './teniente.component.html',
  styleUrl: './teniente.component.css'
})
export class TenienteComponent {

}
