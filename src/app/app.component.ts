import { Component, inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule],
})
export class AppComponent {
  http = inject(HttpClient);
  userId: string = '';

  deleteData() {
    if (!this.userId) {
      alert('Please enter a valid user id');
      return;
    }

    this.http.delete(`http://localhost:3000/users/${this.userId}`).subscribe({
      next: () => {
        console.log('Data deleted successfully...');
      },
      error: (err) => {
        console.error('Something went wrong :(', err);
      },
    });
  }
}
