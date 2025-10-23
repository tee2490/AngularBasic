import { InjectionToken } from '@angular/core';
import { LogMessage1Service } from '../services/log-message1.service';

export const LOG_MSG1 = new InjectionToken<LogMessage1Service>('');
