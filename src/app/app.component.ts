import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements DoCheck {
  dataFromParent: string = '';

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit() hook was invoked...');
  // }
  ngDoCheck(): void {
    console.log('ngDoCheck() hook was invoked...');
  }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random number: ' + random;
  }
}
