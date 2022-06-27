import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonerComponent } from './list-doner.component';

describe('ListDonerComponent', () => {
  let component: ListDonerComponent;
  let fixture: ComponentFixture<ListDonerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDonerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
