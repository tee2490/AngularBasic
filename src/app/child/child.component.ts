import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('showPara') paraRef?: ElementRef;
  // @ViewChild('showPara') paraRef?: ElementRef;

  ngAfterContentInit(): void {
    const content = this.paraRef?.nativeElement;
    content.style.fontStyle = 'Italic';
    content.style.fontWeight = '350';
    content.style.color = '#afeeee';
    console.log(this.paraRef);
  }
}
