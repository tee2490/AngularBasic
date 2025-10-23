import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  id: string = '';
  name: string = '';

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];
    this.name = params['name'];
    console.log(`Emp_Id: ${this.id}, Emp_Name: ${this.name}`);
  }
}
