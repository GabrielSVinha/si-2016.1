import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { MockTasksComponent } from '../mock-tasks/mock-tasks.component';

const appRoutes: Routes =[
  {
    path: 'home',
    component: MenuComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: MockTasksComponent
  }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
