import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenienteComponent } from './teniente.component';

describe('TenienteComponent', () => {
  let component: TenienteComponent;
  let fixture: ComponentFixture<TenienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
