import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-todo',
  templateUrl: './child1-todo.component.html',
  styleUrls: ['./child1-todo.component.css']
})
export class Child1TodoComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
