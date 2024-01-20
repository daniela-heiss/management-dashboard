import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevNextYearComponent } from './rev-next-year.component';

describe('RevNextYearComponent', () => {
  let component: RevNextYearComponent;
  let fixture: ComponentFixture<RevNextYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RevNextYearComponent]
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
