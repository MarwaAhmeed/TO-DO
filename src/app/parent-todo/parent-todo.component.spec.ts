import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTodoComponent } from './parent-todo.component';

describe('ParentTodoComponent', () => {
  let component: ParentTodoComponent;
  let fixture: ComponentFixture<ParentTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
