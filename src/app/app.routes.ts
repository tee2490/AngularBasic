import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { testGuard } from './guards/test-guard';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [testGuard] },
];
