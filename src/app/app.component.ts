import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  responseData$: Observable<any> | undefined;
  loadData: boolean = false;

  constructor(private http: HttpClient) {}

  getData() {
    this.responseData$ = this.http.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.loadData = true;
  }
}
