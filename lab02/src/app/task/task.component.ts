import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent{

  private _name: string;
  private created_at: string;

  constructor() { 
  }

  getName():string{
    return this._name;
  }

  getDate():string{
    return this.created_at;
  }
}
