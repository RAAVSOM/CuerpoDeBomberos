import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaBomberitosComponent } from './galeria-bomberitos.component';

describe('GaleriaBomberitosComponent', () => {
  let component: GaleriaBomberitosComponent;
  let fixture: ComponentFixture<GaleriaBomberitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaBomberitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaBomberitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
