import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobVacancyComponent } from './add-job-vacancy.component';

describe('AddJobVacancyComponent', () => {
  let component: AddJobVacancyComponent;
  let fixture: ComponentFixture<AddJobVacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobVacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
