import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  count = signal<number>(0);

  incrCounter() {
    this.count.set(this.count() + 1);
    console.log('Signal Value: ', this.count());
  }
}
