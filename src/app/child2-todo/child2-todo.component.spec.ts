import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2TodoComponent } from './child2-todo.component';

describe('Child2TodoComponent', () => {
  let component: Child2TodoComponent;
  let fixture: ComponentFixture<Child2TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
