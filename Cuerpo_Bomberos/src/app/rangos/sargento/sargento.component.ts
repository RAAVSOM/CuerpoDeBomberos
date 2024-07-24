import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../encabezado/encabezado.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-sargento',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './sargento.component.html',
  styleUrl: './sargento.component.css'
})
export class SargentoComponent {

}
