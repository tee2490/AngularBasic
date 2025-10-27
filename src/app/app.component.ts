import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  responseData: any;
  loadData: boolean = false;

  constructor(private http: HttpClient) {}

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.responseData = data;
        this.loadData = true;
      });
  }
}
