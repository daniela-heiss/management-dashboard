import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevLastMonthComponent } from './rev-last-month.component';

describe('RevLastMonthComponent', () => {
  let component: RevLastMonthComponent;
  let fixture: ComponentFixture<RevLastMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevLastMonthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
