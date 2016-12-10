import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
})

export class Task{

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
