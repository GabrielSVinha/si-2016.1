import { Component, OnInit } from '@angular/core';
import{ TaskComponent } from '../task/task.component';
import { Router } from '@angular/router';
import { CompletedComponent } from '../completed/completed.component.ts'

@Component({
  selector: 'app-mock-tasks',
  templateUrl: './mock-tasks.component.html',
  styleUrls: ['./mock-tasks.component.css']
})

export class MockTasksComponent{

  private tasks = [new TaskComponent("Dormir"), new TaskComponent("Comer"), new TaskComponent("Codar")];

  constructor(private _router:Router) { }

  homePage(){
  	this._router.navigateByUrl("/home");
  }

  showCompleted(){
  }
  completeTask(){
  }
  addTask(name: string){
	this.tasks.push(new TaskComponent(name));
  }
}
