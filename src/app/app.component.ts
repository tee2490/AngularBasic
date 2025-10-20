import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childComponent?: ChildComponent;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;

  incrChildCounter() {
    console.log(this.childComponent);
    this.childComponent?.incrCounter();
  }
  ngAfterViewInit(): void {
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
}
