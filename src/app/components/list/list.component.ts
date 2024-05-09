import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()  todo:Todo = { id:"", value:"", completed:false}
  @Output() taskCompleted = new EventEmitter<boolean>()
  @Output() deleteTodo = new EventEmitter<string>()
  @Output() todoUpdated = new EventEmitter<any>()

  editTodo = {id:"",value:"",isOpen:false}

  onTaskComplete(){
    this.todo.completed = true;
    this.taskCompleted.emit(this.todo.completed)
  }

  onTodoDelete(){
    this.deleteTodo.emit(this.todo.id);
  }
  
  onTodoEdit(todo:Todo){
     this.editTodo.id = todo.id;
     this.editTodo.value = todo.value;
     this.editTodo.isOpen = true;
  }

  onTodoUpdated(e:any,id:string){
     this.todoUpdated.emit({id:this.editTodo.id,value:this.editTodo.value});
     this.editTodo = {id:"",value:"",isOpen:false}
  }

}
