import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arr = signal([1, 2, 3, 4]);
  sumArr = computed(() => this.arr().reduce((sum, i) => sum + i));

  count = signal(20);
  remainingCount = computed(() => 100 - this.count());

  modifyArr() {
    this.arr.update((val) => [...val, 10]);
  }
}
