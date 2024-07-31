import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SargentoComponent } from './sargento.component';

describe('SargentoComponent', () => {
  let component: SargentoComponent;
  let fixture: ComponentFixture<SargentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SargentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SargentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
