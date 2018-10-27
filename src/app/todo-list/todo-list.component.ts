import { Component, OnInit } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styles:[`
    .todo-item{
      cursor:pointer;
    }
    .is-done{
        text-decoration: line-through;
    }
  `]
  //styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  ngOnInit() { }

  public name: string = '';
  public items: Array<TodoItem> = [];
  public newTodo: string = '';

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }

  public add(todo:string) {
    if(todo.length){      
      this.items.push({isDone:false,name:todo});
      this.newTodo = '';
    }
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }
}
