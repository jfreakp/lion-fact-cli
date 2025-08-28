import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../app/dashboard/dashboard.routes'),
  }
];
