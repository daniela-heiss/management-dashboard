import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { RevenueComponent } from '../revenue/revenue.component';
import { RevNextYearComponent } from '../rev-next-year/rev-next-year.component';
import { ProfitChartComponent } from '../profit-chart/profit-chart.component';
import { HighestRevCustomerComponent } from '../highest-rev-customer/highest-rev-customer.component';
import { HighestOrderCustomerComponent } from '../highest-order-customer/highest-order-customer.component';
import { RevenueService } from '../service/revenue.service';

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
      imports: [HttpClientTestingModule],
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
