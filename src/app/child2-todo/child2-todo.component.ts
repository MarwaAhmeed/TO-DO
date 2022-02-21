import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child2-todo',
  templateUrl: './child2-todo.component.html',
  styleUrls: ['./child2-todo.component.css']
})
export class Child2TodoComponent implements OnInit {
@Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }
 
}
