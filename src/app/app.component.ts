import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  onKeyPress(e: any) {
    console.log(e.target.value);
  }

   onClick(e: MouseEvent, msg: string, num: number) {
    console.log('Event: ', e);
    console.log('Message: ', msg);
    console.log('Number: ', num);
  }
}


