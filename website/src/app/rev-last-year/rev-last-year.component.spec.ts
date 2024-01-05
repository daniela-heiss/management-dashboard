import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevLastYearComponent } from './rev-last-year.component';

describe('RevLastYearComponent', () => {
  let component: RevLastYearComponent;
  let fixture: ComponentFixture<RevLastYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevLastYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevLastYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
