import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTaskComponent } from './stepper-task.component';

describe('StepperTaskComponent', () => {
  let component: StepperTaskComponent;
  let fixture: ComponentFixture<StepperTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
