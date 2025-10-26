import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  randomNum = Math.floor(Math.random() * 90) + 10;
  coldObservable$ = new Observable<number>((observer) => {
    observer.next(this.randomNum);
    observer.complete();
  });

  constructor() {
    this.coldObservable$.subscribe({
      next: (value) => console.log(`Subscriber 1: ${value}`),
    });
    this.coldObservable$.subscribe({
      next: (value) => console.log(`Subscriber 2: ${value}`),
    });

    setTimeout(() => {
      this.coldObservable$.subscribe({
        next: (value) => console.log(`Subscriber 3: ${value}`),
      });
    }, 2000);
  }
}
