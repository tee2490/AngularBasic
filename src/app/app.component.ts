import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { AppUpdateService } from './services/app-update.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  providers: [
    AppConfigService,
    {
      provide: 'APP_UPDATE',
      useFactory: (configService: AppConfigService) =>
        configService.getAppConfig(),
      deps: [AppConfigService],
    },
    AppUpdateService,
  ],
})
export class AppComponent {
  message: string;

  constructor(private appUpdateService: AppUpdateService) {
    this.message = this.appUpdateService.getAppUpdate();
  }
}
