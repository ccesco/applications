import { Routes } from '@angular/router';

import { PageLayoutComponent } from './core';

export const AppRoutes: Routes = [{
  path: '',
  component: PageLayoutComponent,
  children: [{
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
}];
