import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray = [];
  title = 'angular-todo-app';

  /*add task*/  
  addTodo(value : String) {
    this.todoArray.push(value);
  }

  /*delete task*/  
  deleteItem(todo){   
    for(let i=0 ;i<= this.todoArray.length ;i++){    
      if(todo== this.todoArray[i]){     
        this.todoArray.splice(i,1)    
      }   
    }  
  }

}
