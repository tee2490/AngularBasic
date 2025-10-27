import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value = signal(20);
  linkedValue = linkedSignal({
    source: this.value,
    computation: () => this.value() * 2,
  });

  // constructor() {
  //   this.linkedValue.set(30);
  // }
}
