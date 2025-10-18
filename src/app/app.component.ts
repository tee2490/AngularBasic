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
  subjectList = [
    {
      subCode: 101,
      name: 'JavaScript',
    },
    {
      // subCode: 102,
      name: 'C++',
    },
    {
      subCode: 103,
      name: 'NestJS',
    },
    {
      subCode: 104,
      name: 'Python',
    },
  ];
}
