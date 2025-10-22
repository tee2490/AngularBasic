import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showJson: boolean = false;

  students = [
    { name: 'user a', age: 21, gender: 'female', major: 'computer science' },
    {
      name: 'user b',
      age: 23,
      gender: 'male',
      major: 'electrical engineering',
    },
    { name: 'user c', age: 20, gender: 'male', major: 'sociology' },
    { name: 'user d', age: 25, gender: 'female', major: 'biomedical science' },
  ];

  toggleJson() {
    this.showJson = !this.showJson;
  }
}
