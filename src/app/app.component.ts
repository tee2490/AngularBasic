import { Component } from '@angular/core';
import { AdminDataService } from './services/admin-data.service';
import { ADMIN_DATA } from './ADMIN_DATA/admin-data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: ADMIN_DATA, useValue: ADMIN_DATA }, AdminDataService],
})
export class AppComponent {
  constructor(public getAdmin: AdminDataService) {}
}
