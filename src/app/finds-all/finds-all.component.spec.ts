import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsAllComponent } from './finds-all.component';

describe('FindsAllComponent', () => {
  let component: FindsAllComponent;
  let fixture: ComponentFixture<FindsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
