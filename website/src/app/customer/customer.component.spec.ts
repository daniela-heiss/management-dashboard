import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomerService } from '../service/customer.service';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
