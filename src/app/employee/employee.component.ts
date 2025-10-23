import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  id: string = '';
  name: string = '';
  employees = [
    { id: 1, name: 'UserA' },
    { id: 2, name: 'UserB' },
    { id: 3, name: 'UserC' },
    { id: 4, name: 'UserD' },
    { id: 5, name: 'UserE' },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      console.log(params);
    });
  }
}
