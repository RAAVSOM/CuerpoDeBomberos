import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomberitosComponent } from './bomberitos.component';

describe('BomberitosComponent', () => {
  let component: BomberitosComponent;
  let fixture: ComponentFixture<BomberitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BomberitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomberitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
