import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent{

  public _name: string;
  private created_at: number;

  constructor(name: string) { 
	this._name = name;
  	this.created_at = Date.now();
  }

  getDate():number{
    return this.created_at;
  }
}
