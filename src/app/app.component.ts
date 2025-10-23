import { Component, Inject } from '@angular/core';
import { showGreetingMessage } from './dependencies/showGreeting';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: 'GREETING_MSG_FACTORY', useFactory: showGreetingMessage },
    { provide: 'GREETING_MSG_VALUE', useValue: 'Hello' },
  ],
})
export class AppComponent {
  constructor(
    @Inject('GREETING_MSG_FACTORY') public factoryMsg: string,
    @Inject('GREETING_MSG_VALUE') public valueMsg: string
  ) {
    console.log('useFactory Message: ', factoryMsg);
    console.log('useValue Message: ', valueMsg);
  }
}
