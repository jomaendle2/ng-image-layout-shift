import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'without-sizing',
    pathMatch: 'full',
  },
  {
  path: 'without-sizing',
  loadComponent: () => import('./without-sizing/without-sizing.component').then(m => m.WithoutSizingComponent)
}, {
  path: 'proper-sizing',
  loadComponent: () => import('./proper-sizing/proper-sizing.component').then(m => m.ProperSizingComponent)
}];
