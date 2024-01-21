import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RevNextYearComponent } from './rev-next-year.component';
import { RevenueService } from '../service/revenue.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RevNextYearComponent', () => {
  let component: RevNextYearComponent;
  let fixture: ComponentFixture<RevNextYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevNextYearComponent],
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

    fixture = TestBed.createComponent(RevNextYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
