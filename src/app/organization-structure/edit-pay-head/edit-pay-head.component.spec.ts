import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayHeadComponent } from './edit-pay-head.component';

describe('EditPayHeadComponent', () => {
  let component: EditPayHeadComponent;
  let fixture: ComponentFixture<EditPayHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPayHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPayHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
