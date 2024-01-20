import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RevenueComponent } from './revenue.component';
import { RevenueService } from '../service/revenue.service';

describe('RevenueComponent', () => {
  let component: RevenueComponent;
  let fixture: ComponentFixture<RevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevenueComponent],
      imports: [HttpClientTestingModule],
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
