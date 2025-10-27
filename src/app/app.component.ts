import { Component, effect, signal, untracked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  counter1 = signal(0);
  counter2 = signal(0);

  counterUpdate = effect(() => {
    console.log(
      `Counter 1: ${this.counter1()} \nCounter 2: ${untracked(() =>
        this.counter2()
      )}`
    );
  });

  updateCounter1() {
    this.counter1.update(() => this.counter1() + 1);
  }
  updateCounter2() {
    this.counter2.update(() => this.counter2() + 1);
  }
}
