import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  resolvePromise$: Promise<string>;

  constructor() {
    this.resolvePromise$ = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise executed');
      }, 2000);
    });
  }
}
