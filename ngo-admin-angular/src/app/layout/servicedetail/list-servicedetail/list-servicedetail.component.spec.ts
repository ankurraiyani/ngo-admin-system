import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicedetailComponent } from './list-servicedetail.component';

describe('ListServicedetailComponent', () => {
  let component: ListServicedetailComponent;
  let fixture: ComponentFixture<ListServicedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServicedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
