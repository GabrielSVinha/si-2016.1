import { Component, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-tasks',
  templateUrl: './mock-tasks.component.html',
  styleUrls: ['./mock-tasks.component.css']
})

export class MockTasksComponent{

  private tasks = [new Task("Dormir"), new Task("Comer"), new Task("Codar")];
  private completed = [];
  private show = false;

  constructor(private _router:Router) { }

  homePage(){
  	this._router.navigateByUrl("/home");
  }

  showCompleted(){
  	this.show = true;
  }

  hideCompleted(){
	   this.show = false;
  }

  completeTask(task: Task){
	   this.tasks.splice(this.tasks.indexOf(task), 1);
     this.completed.push(task);
  }

  addTask(name: string){
	   this.tasks.push(new Task(name));
  }
}
