import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './services/log-message2.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: LogMessage1Service, useClass: LogMessage1Service },
    { provide: LogMessage1Service, useClass: LogMessage2Service },
  ],
})
export class AppComponent implements OnInit {
  public logger = inject(LogMessage1Service);

  ngOnInit(): void {
    this.logger.log();
  }
}
