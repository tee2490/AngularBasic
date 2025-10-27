import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  observable$ = interval(1000).pipe(
    map(() => Math.floor(Math.random() * 100).toString()),
    take(5)
  );
  randomNumber = toSignal(this.observable$, { initialValue: 'Loading...' });

  constructor() {
    effect(() => {
      console.log('Random Number: ', this.randomNumber());
    });
  }
}
