import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../encabezado/encabezado.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-bomberos',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './bomberos.component.html',
  styleUrl: './bomberos.component.css'
})
export class BomberosComponent {

}
