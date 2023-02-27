import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepExampleComponent } from './step-example.component';

describe('StepExampleComponent', () => {
  let component: StepExampleComponent;
  let fixture: ComponentFixture<StepExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
