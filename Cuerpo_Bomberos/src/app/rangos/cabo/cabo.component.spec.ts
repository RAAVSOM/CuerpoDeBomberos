import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboComponent } from './cabo.component';

describe('CaboComponent', () => {
  let component: CaboComponent;
  let fixture: ComponentFixture<CaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
