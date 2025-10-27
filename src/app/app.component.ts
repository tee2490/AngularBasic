import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  enableListener = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      effect((onCleanup) => {
        if (this.enableListener()) {
          const listener = () => console.log('Event triggered');

          window.addEventListener('click', listener);
          console.log('Listener added');

          onCleanup(() => {
            window.removeEventListener('click', listener);
            console.log('Event listener removed');
          });
        }
      });
    }
    console.log('Initial state: Listener disabled');

    setTimeout(() => {
      this.enableListener.set(true);
      console.log('Signal set to true: Listener enabled');
    }, 1000);

    setTimeout(() => {
      this.enableListener.set(false);
      console.log('Signal set to false: Listener disabled');
    }, 5000);
  }
}
