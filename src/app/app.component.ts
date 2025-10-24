import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { urlValidator } from './custom-validators/url-validator';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [ReactiveFormsModule],
})
export class AppComponent {
  validateURL: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateURL = this.fb.group({
      checkURL: ['', [Validators.required, urlValidator]],
    });
  }
  validate() {
    if (!this.validateURL.valid) {
      alert('Please enter correct URL');
      return false;
    } else {
      return alert('URL is valid');
    }
  }
}
