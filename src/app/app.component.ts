import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  putData() {
    this.http
      .get<any>('http://localhost:3000/users/102')
      .subscribe((updatedData) => {
        (updatedData.name = 'NewUserD'),
          (updatedData.email = 'newuserd@gmail.com');
        this.http
          .put('http://localhost:3000/users/102', updatedData)
          .subscribe({
            next: (res) => console.log('User Updated: ', res),
            error: (err) => console.error('Error updating the data: ', err),
          });
      });
  }
}
