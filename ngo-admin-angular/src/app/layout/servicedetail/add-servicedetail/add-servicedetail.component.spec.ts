import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicedetailComponent } from './add-servicedetail.component';

describe('AddServicedetailComponent', () => {
  let component: AddServicedetailComponent;
  let fixture: ComponentFixture<AddServicedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServicedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
