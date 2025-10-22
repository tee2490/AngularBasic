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
  employees = [
    { name: 'user A', state: 'california', salary: 50000 },
    { name: 'user B', state: 'new york', salary: 75000 },
    { name: 'user C', state: 'texas', salary: 60000 },
    { name: 'user D', state: 'pennsylvania', salary: 85000 },
  ];
}
