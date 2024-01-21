import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { RevenueComponent } from '../revenue/revenue.component';
import { RevNextYearComponent } from '../rev-next-year/rev-next-year.component';
import { ProfitChartComponent } from '../profit-chart/profit-chart.component';
import { HighestRevCustomerComponent } from '../highest-rev-customer/highest-rev-customer.component';
import { HighestOrderCustomerComponent } from '../highest-order-customer/highest-order-customer.component';
import { RevenueService } from '../service/revenue.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        RevenueComponent,
        RevNextYearComponent,
        ProfitChartComponent,
        HighestRevCustomerComponent,
        HighestOrderCustomerComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [RevenueService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
