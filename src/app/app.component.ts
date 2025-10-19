import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  user = {
    name: 'UserA',
  };
  changeUserName() {
    this.user.name = 'UserB';
  }
}
