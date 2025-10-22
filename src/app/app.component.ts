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
  userDetails = {
    name: 'User',
    email: 'user@example.com',
    address: {
      street: '23 Main St',
      city: 'ChiangMai',
      state: 'Thailand',
      zip: 88901,
    },
  };
}
