import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHeadListComponent } from './pay-head-list.component';

describe('PayHeadListComponent', () => {
  let component: PayHeadListComponent;
  let fixture: ComponentFixture<PayHeadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayHeadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayHeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
