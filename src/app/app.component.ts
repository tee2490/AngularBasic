import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  user: { username: string } = { username: '' };

  submitForm(myForm: NgForm) {
    if (myForm.valid) {
      alert('Submitted successfully, check console');
      console.log(this.user);
    }
  }
}
