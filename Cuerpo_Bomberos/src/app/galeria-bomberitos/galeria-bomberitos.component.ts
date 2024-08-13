import { Component } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-galeria-bomberitos',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './galeria-bomberitos.component.html',
  styleUrl: './galeria-bomberitos.component.css'
})
export class GaleriaBomberitosComponent {

}
