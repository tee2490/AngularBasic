import { Component } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: MessageService, useFactory: () => new MessageService() },
  ],
})
export class AppComponent {
  constructor(private msgService: MessageService) {
    console.log(this.msgService.msg());
  }
}
