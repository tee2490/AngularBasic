import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LogMessage1Service } from './services/log-message1.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: 'LOG_MSG1', useClass: LogMessage1Service }],
})
export class AppComponent implements OnInit {
  constructor(@Inject('LOG_MSG1') private logger: LogMessage1Service) {}

  ngOnInit(): void {
    this.logger.log();
  }
}
