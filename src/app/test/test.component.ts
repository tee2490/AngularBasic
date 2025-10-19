import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
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
export class TestComponent
  implements AfterContentInit, AfterContentChecked, AfterViewInit
{
  @ViewChild('wrapper') wrapper!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was invoked...');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() was invoked...');
  }

  ngAfterViewInit(): void {
    const divElement: HTMLElement = this.wrapper.nativeElement;
    divElement.style.color = 'maroon';
    divElement.style.fontSize = '15px';
    divElement.style.fontWeight = '300';

    console.log('ngAfterViewInit() was invoked...', this.wrapper);
  }
}
