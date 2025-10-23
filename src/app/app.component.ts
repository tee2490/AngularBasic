import { Component, Inject, inject, OnInit } from '@angular/core';
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
    { provide: 'LOG_MSG1', useClass: LogMessage1Service },
    { provide: 'LOG_MSG2', useClass: LogMessage2Service },
  ],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject('LOG_MSG1') private logger: LogMessage1Service,
    @Inject('LOG_MSG2') private logger2: LogMessage2Service
  ) {}

  ngOnInit(): void {
    this.logger.log();
    this.logger2.log();
  }
}
