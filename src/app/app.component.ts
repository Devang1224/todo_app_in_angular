import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../types';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

todoInput:string = "";
todoList:Todo[] = [];

 generateRandomId() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

addTodo(){
  if(this.todoInput=="" || this.todoInput.length==0){
    return;
  }
  const newId = this.generateRandomId();
  const newTodo = {
    id:newId,
    value:this.todoInput,
    completed:false
  };
  this.todoList.unshift(newTodo);
  this.todoInput = "";
}

onCompleted(id:string,state:boolean){
if(state){
  this.todoList = this.todoList.filter((item)=>item.id!=id);
}
}
onDeleteTodo(id:string){
 this.todoList = this.todoList.filter((item)=>item.id!=id);
}


onTodoUpdate(updatedTodo:any){
 this.todoList = this.todoList.map((item)=>{
  if(item.id==updatedTodo.id){
    item.value = updatedTodo.value;
  }
  return item;
 })
}

}
