import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1TodoComponent } from './child1-todo.component';

describe('Child1TodoComponent', () => {
  let component: Child1TodoComponent;
  let fixture: ComponentFixture<Child1TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
