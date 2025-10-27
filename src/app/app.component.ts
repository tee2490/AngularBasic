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
  constructor(private http: HttpClient) {}

  postData() {
    const user = {
      id: 102,
      name: 'UserB',
      email: 'userb@gmail.com',
    };
    this.http
      .post('http://localhost:3000/users', user)
      .subscribe((res) => console.log('User updated: ', res));
  }
}
