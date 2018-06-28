import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {BasicComponent} from './pages/basic/basic.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: BasicComponent,
    path: 'basic'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
