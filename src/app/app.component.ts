import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fullStackDev = [
    {
      id: 1,
      name: 'Angular',
    },
    {
      id: 2,
      name: 'React',
    },
    {
      id: 3,
      name: 'Next.js',
    },
    {
      id: 4,
      name: 'NestJS',
    },
  ];
}
