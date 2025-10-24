import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
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
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', Validators.min(18)),
    });
  }

  submitForm() {
    const userAge = this.myForm.get('age')?.value;
    if (userAge < 18) {
      alert('Age must be 18 or older');
      return;
    } else if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
