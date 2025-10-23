import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  { path: 'employee/:id/:name', component: EmployeeComponent },
];
