import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRevCustomerComponent } from './highest-rev-customer.component';

describe('HighestRevCustomerComponent', () => {
  let component: HighestRevCustomerComponent;
  let fixture: ComponentFixture<HighestRevCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestRevCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighestRevCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
