import {
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements AfterContentInit {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was invoked...');
    console.log('ngAfterContentInit() - wrapper: ', this.wrapper);
    console.log('ngAfterContentInit() - content: ', this.content);
  }
}
