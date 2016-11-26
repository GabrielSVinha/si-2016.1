import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './config/app.routes';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { MenuComponent } from './menu/menu.component';
import { MockTasksComponent } from './mock-tasks/mock-tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MenuComponent,
    MockTasksComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
