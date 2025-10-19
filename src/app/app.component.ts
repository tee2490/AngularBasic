import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses: { id: number; name: string }[] = [
    { id: 1, name: 'JavaScript - Marathon Interview Questions Series' },
    { id: 2, name: 'Mastering React With Interview Questions, eStore Project' },
    { id: 3, name: 'Mastering TypeScript With Marathon Interview Questions' },
    { id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions' },
  ];
}
