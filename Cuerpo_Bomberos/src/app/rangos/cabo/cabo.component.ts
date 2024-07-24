import { Component } from '@angular/core';
import { EncabezadoComponent } from "../../encabezado/encabezado.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-cabo',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './cabo.component.html',
  styleUrl: './cabo.component.css'
})
export class CaboComponent {

}
