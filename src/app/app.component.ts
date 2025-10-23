import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeService } from './dependencies/employee.service';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  employees: any[];
  empId: number = 0;
  emp: any;

  constructor(private e: EmployeeService) {
    this.employees = this.e.getEmployees();
  }
  showDetails(employeeId: number) {
    this.empId = employeeId;
    this.emp = this.e.getEmployeeById(employeeId);
  }
}
