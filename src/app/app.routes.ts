import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { loadAdminGuard } from './guards/load-admin-guard';

export const routes: Routes = [
  {
    path: 'home',
    component: AdminComponent,
    canMatch: [loadAdminGuard],
  },
  {
    path: 'home',
    component: UserComponent,
  },
  { path: '**', component: HomeComponent },
];
