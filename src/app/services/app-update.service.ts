import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppUpdateService {
  constructor(@Inject('APP_UPDATE') private config: any) {}

  getAppUpdate(): string {
    const { version, environment, appName } = this.config;

    return `Welcome to "${appName}", v${version} (${environment} environment)`;
  }
}
