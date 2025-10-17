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
  isShift(event: any) {
    if (event.shiftKey && event.key === 'Y') {
      console.log('Shift + Y is pressed', event);
    }
  }
}


