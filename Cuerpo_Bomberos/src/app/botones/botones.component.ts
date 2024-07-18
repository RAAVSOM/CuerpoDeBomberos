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
    let elemento = this._document.getElementById('chat');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'src/assets/chatbot.js';
    this._renderer2.appendChild(elemento, script);
  }
}
