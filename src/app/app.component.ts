import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {
    const observable$ = of(
      { name: 'User', age: 27 },
      [1, 2, 3, 4],
      () => 'Hello'
    );
    observable$.subscribe((val) => console.log(val));
  }
}
