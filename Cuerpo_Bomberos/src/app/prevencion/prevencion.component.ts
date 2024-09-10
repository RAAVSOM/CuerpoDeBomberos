import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EncabezadoComponent } from "../encabezado/encabezado.component";
import { FooterComponent } from "../footer/footer.component";
import $ from 'jquery';

@Component({
  selector: 'app-prevencion',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent],
  templateUrl: './prevencion.component.html',
  styleUrl: './prevencion.component.css'
})
export class PrevencionComponent implements OnInit {

  @ViewChild('casa', { static: true }) casaElement!: ElementRef;
  @ViewChild('afueras', { static: true }) afuerasElement!: ElementRef;

  ngOnInit(): void {
  }

  recorridoCasa = 0;
  @ViewChild('casa1', { static: true }) casa1!: ElementRef;
  @ViewChild('casa2', { static: true }) casa2!: ElementRef;
  @ViewChild('casa3', { static: true }) casa3!: ElementRef;
  @ViewChild('casa4', { static: true }) casa4!: ElementRef;
  @ViewChild('casa5', { static: true }) casa5!: ElementRef;
  iniciarScrollCasa() {
    let lista = [this.casa1, this.casa2, this.casa3, this.casa4, this.casa5]; 
    lista[this.recorridoCasa].nativeElement.classList.add("d-none");
    if(this.recorridoCasa >= lista.length - 1){
      this.recorridoCasa = 0;
    }else{
      this.recorridoCasa ++;
    }
    lista[this.recorridoCasa].nativeElement.classList.remove("d-none");
  }

  recorridoAfuera = 0;
  @ViewChild('afuera1', { static: true }) afuera1!: ElementRef;
  @ViewChild('afuera2', { static: true }) afuera2!: ElementRef;
  @ViewChild('afuera3', { static: true }) afuera3!: ElementRef;
  @ViewChild('afuera4', { static: true }) afuera4!: ElementRef;
  @ViewChild('afuera5', { static: true }) afuera5!: ElementRef;
  iniciarScrollFuera() {
    let lista = [this.afuera1, this.afuera2, this.afuera3, this.afuera4, this.afuera5]; 
    lista[this.recorridoAfuera].nativeElement.classList.add("d-none");
    if(this.recorridoAfuera >= lista.length - 1){
      this.recorridoAfuera = 0;
    }else{
      this.recorridoAfuera ++;
    }
    lista[this.recorridoAfuera].nativeElement.classList.remove("d-none");
    
  }



  recorridoArbol = 0;
  @ViewChild('arbol1', { static: true }) arbol1!: ElementRef;
  @ViewChild('arbol2', { static: true }) arbol2!: ElementRef;
  @ViewChild('arbol3', { static: true }) arbol3!: ElementRef;
  @ViewChild('arbol4', { static: true }) arbol4!: ElementRef;
  iniciarScrollArbol() {
    let lista = [this.arbol1, this.arbol2, this.arbol3, this.arbol4]; 
    lista[this.recorridoArbol].nativeElement.classList.add("d-none");
    if(this.recorridoArbol >= lista.length - 1){
      this.recorridoArbol = 0;
    }else{
      this.recorridoArbol ++;
    }
    lista[this.recorridoArbol].nativeElement.classList.remove("d-none");
    
  }


  recorrido = 0;
  @ViewChild('llubia1', { static: true }) llubia1!: ElementRef;
  @ViewChild('llubia2', { static: true }) llubia2!: ElementRef;
  @ViewChild('llubia3', { static: true }) llubia3!: ElementRef;
  iniciarScrollLlubia() {
    let lista = [this.llubia1, this.llubia2, this.llubia3]; 
    lista[this.recorrido].nativeElement.classList.add("d-none");
    if(this.recorrido >= lista.length - 1){
      this.recorrido = 0;
    }else{
      this.recorrido ++;
    }
    lista[this.recorrido].nativeElement.classList.remove("d-none");
    
  }
}
