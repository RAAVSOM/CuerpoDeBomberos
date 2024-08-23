import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent implements OnInit {
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }
  
  ngOnInit(): void {
    this.cargarInsta()
  }

  cargarInsta(){
    
  }
  abierto = true;
  abrirchat(){
    if (this.abierto) {
      let doc = document.getElementById("doc");
      doc?.classList.remove("d-none");
      this.abierto = false;
    }else{
      let doc = document.getElementById("doc");
      doc?.classList.add("d-none");
      this.abierto = true;
    }
  }
}
