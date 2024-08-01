import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevencionComponent } from './prevencion.component';

describe('PrevencionComponent', () => {
  let component: PrevencionComponent;
  let fixture: ComponentFixture<PrevencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrevencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
