import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { EncabezadoComponent } from '../encabezado/encabezado.component';
import { RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EncabezadoComponent, FooterComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  public ngOnInit() {
    this.cargarInsta()
    this.cargarFace()
    this.cargarTwiter()
    this.cargarYoutube()
  }

  cargarInsta(){
    let elemento = this._document.getElementById('v-pills-home');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://static.elfsight.com/platform/platform.js';
    this._renderer2.appendChild(elemento, script);
  }

  cargarFace(){
    let elemento = this._document.getElementById('v-pills-profile');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://static.elfsight.com/platform/platform.js';
    this._renderer2.appendChild(elemento, script);
  }

  cargarTwiter(){
    let elemento = this._document.getElementById('v-pills-disabled');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://static.elfsight.com/platform/platform.js';
    this._renderer2.appendChild(elemento, script);
  }

  cargarYoutube(){
    let elemento = this._document.getElementById('v-pills-messages');
    let script = this._renderer2.createElement('script');
    script.type = 'application/javascript';
    script.src = 'https://static.elfsight.com/platform/platform.js';
    this._renderer2.appendChild(elemento, script);
  }
}
