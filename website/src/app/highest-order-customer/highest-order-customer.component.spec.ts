import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestOrderCustomerComponent } from './highest-order-customer.component';

describe('HighestOrderCustomerComponent', () => {
  let component: HighestOrderCustomerComponent;
  let fixture: ComponentFixture<HighestOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestOrderCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestOrderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
