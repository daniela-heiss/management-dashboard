import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HighestOrderCustomerComponent } from './highest-order-customer.component';
import { CustomerService } from '../service/customer.service';

describe('HighestOrderCustomerComponent', () => {
  let component: HighestOrderCustomerComponent;
  let fixture: ComponentFixture<HighestOrderCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestOrderCustomerComponent],
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
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
