import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RevenueComponent } from './revenue.component';
import { RevenueService } from '../service/revenue.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueComponent],
      imports: [
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      providers: [RevenueService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
