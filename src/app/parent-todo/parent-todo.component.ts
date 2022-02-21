import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-todo',
  templateUrl: './parent-todo.component.html',
  styleUrls: ['./parent-todo.component.css']
})
export class ParentTodoComponent implements OnInit {
  items:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items)
  }
}
