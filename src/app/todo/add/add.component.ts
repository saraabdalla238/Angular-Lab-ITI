import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todoList: any[] = [];
  todoLength: number = 0;
  filteredTodos: any[]=[];


  
  id: number = 0;

  constructor() { 
    this.filteredTodos=[];
  }

  ngOnInit(): void {
  }

  add(todo: string){
    this.todoList.push({id: this.id , name: todo})
    this.id++;   
    this.todoLength = this.todoList.length;
  }

  done(e: any){
    let value = e.target.value; 
    
    this.todoList.forEach((item,index)=>{
      if(item.id==value) this.todoList.splice(index,1);
  });
  this.todoLength = this.todoList.length;

      
  }

  search(e: any){
    this.filteredTodos = this.todoList.filter((item) => {{
      return item.name.includes(e.target.value);
    }});

  console.log(this.todoList);
  }

  

}
