import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [],
})
export class AppComponent {
  constructor() {
    const observable = new Observable((observer) => {
      console.log('Observable executed');
    }).subscribe();
  }
}
