import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),
    });
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee(): void {
    const employeeGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
    this.employees.push(employeeGroup);
  }

  submitForm() {
    if (this.employeeForm.invalid) {
      return;
    } else {
      console.log(this.employeeForm.value);
    }
  }
}
