import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  addValue = 0;
  constructor() {
    effect(() => {
      if (this.sumArr() > 30) alert(`Max value reached ${this.sumArr()}`);
    });
  }

  arr = signal([1, 2, 3, 4]);
  sumArr = computed(() => this.arr().reduce((sum, i) => sum + i));

  count = signal(40);
  remainingCount = computed(() => 100 - this.count());

  modifyArr() {
    this.addValue += 10;
    this.arr.update((val) => [...val, this.addValue]);
  }
}
