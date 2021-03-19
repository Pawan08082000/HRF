import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixingInterviewComponent } from './fixing-interview.component';

describe('FixingInterviewComponent', () => {
  let component: FixingInterviewComponent;
  let fixture: ComponentFixture<FixingInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixingInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixingInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
