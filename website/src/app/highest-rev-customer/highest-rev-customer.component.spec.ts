import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { HighestRevCustomerComponent } from './highest-rev-customer.component';
import { CustomerService } from '../service/customer.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HighestRevCustomerComponent', () => {
  let component: HighestRevCustomerComponent;
  let fixture: ComponentFixture<HighestRevCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighestRevCustomerComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      providers: [CustomerService]
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
