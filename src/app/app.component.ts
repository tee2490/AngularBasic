import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.error(5);

    setTimeout(() => {
      console.log('---After two seconds---');
      observer.next(4);
      observer.complete();
    }, 2000);
  });

  constructor() {
    console.log('Before subscribe');
    this.observable.subscribe({
      next(x) {
        console.log('Value: ', x);
      },
      error(e) {
        console.error('Error occurred: ', e);
      },
      complete() {
        console.log('Observable successfully executed');
      },
    });
    console.log('After subscribe');
  }
}
