import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
