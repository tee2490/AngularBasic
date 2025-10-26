import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent {
  jsonData$: Observable<any> | undefined;

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.jsonData$ = new Observable<any>((observer) => {
      fetch('https://dummyjson.com/products/category-list')
        .then((response) => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }
}
