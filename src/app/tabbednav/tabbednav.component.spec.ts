import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbednavComponent } from './tabbednav.component';

describe('TabbednavComponent', () => {
  let component: TabbednavComponent;
  let fixture: ComponentFixture<TabbednavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabbednavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbednavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
