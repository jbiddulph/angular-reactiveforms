import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEditComponent } from './find-edit.component';

describe('FindEditComponent', () => {
  let component: FindEditComponent;
  let fixture: ComponentFixture<FindEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
