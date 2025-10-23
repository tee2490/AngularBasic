import { Component } from '@angular/core';
import { AlertMessage1Service } from './services/alert-message1.service';
import { AlertMessage2Service } from './services/alert-message2.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <button (click)="displayAlert()">Show</button> `,
  styleUrl: './app.component.css',
  providers: [
    AlertMessage1Service,
    { provide: AlertMessage2Service, useExisting: AlertMessage1Service },
  ],
})
export class AppComponent {
  constructor(private alertMsg: AlertMessage1Service) {}

  displayAlert() {
    this.alertMsg.showAlert();
  }
}
