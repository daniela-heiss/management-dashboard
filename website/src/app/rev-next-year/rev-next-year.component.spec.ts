import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RevNextYearComponent } from './rev-next-year.component';
import { RevenueService } from '../service/revenue.service';

describe('RevNextYearComponent', () => {
  let component: RevNextYearComponent;
  let fixture: ComponentFixture<RevNextYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevNextYearComponent],
      imports: [HttpClientTestingModule],
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
