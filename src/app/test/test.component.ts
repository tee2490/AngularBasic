import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent
  implements AfterViewInit, AfterContentChecked, AfterViewChecked
{
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck() hook was invoked...');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() hook was invoked...');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() hook was invoked...');
  }
}
