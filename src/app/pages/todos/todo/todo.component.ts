import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todos: Todo[];
todoTitle:string;
idForTodo:number;


  constructor() { }

  ngOnInit() {
    this.todoTitle = "";
    this.todos = [
      {
        id:1,
        title: 'Angular firs App',
        completed: false,
        editing: false
      },
      {
        id:2,
        title: 'Tech one sanje new job',
        completed: false,
        editing: false
      },
      {
        id:3,
        title: 'TrynDev For your support anytime',
        completed: false,
        editing: false
      }
    ]
    this.idForTodo = this.todos.length;
  }
  addTodo():void {
    if(this.todoTitle.trim().length == 0) {
      return;
    }
    this.todos.push({
      id:this.idForTodo,
      title:this.todoTitle,
      completed: false,
      editing: false,
    })
    this.todoTitle = "";
    this.idForTodo++;
  }
  deleteTodo(id:number):void {
    this.todos = this.todos.filter(todo => todo.id != id);
  }
  editTodoItem(todoitem: Todo) {
    todoitem.editing = true;
  }
  doneEdit(todoitem:Todo) {
    todoitem.editing = false;
  }
  
}
interface Todo {
  id:number,
  title:string,
  completed: boolean,
  editing: boolean
}