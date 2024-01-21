import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfitChartComponent } from './profit-chart.component';
import { RevenueService } from '../service/revenue.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProfitChartComponent', () => {
  let component: ProfitChartComponent;
  let fixture: ComponentFixture<ProfitChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfitChartComponent],
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

    fixture = TestBed.createComponent(ProfitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
