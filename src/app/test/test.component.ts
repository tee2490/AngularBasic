import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnChanges {
  @Input() inputValue: string = '';
  previousValue: string | undefined;
  currentValue: string | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputValue']) {
      this.previousValue = changes['inputValue'].previousValue;
      this.currentValue = changes['inputValue'].currentValue;
      console.log(changes);
    }
  }
}
