import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    data: { preload: true, roles: ['admin', 'user'] },
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./components/settings/settings.component').then((m) => m.SettingsComponent),
    data: { preload: true, roles: ['admin'] },
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
