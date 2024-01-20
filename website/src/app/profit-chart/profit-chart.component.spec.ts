import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfitChartComponent } from './profit-chart.component';
import { RevenueService } from '../service/revenue.service';

describe('ProfitChartComponent', () => {
  let component: ProfitChartComponent;
  let fixture: ComponentFixture<ProfitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfitChartComponent],
      imports: [HttpClientTestingModule],
      providers: [RevenueService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
