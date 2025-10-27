import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  cart = signal({
    name: 'Product 1',
    email: 'usera@gmail.com',
  });

  ngOnInit(): void {
    console.log('Previous cart: ', this.cart());
    this.cart.update((cartDetails) => ({
      ...cartDetails,
      qty: 3,
      name: 'Product 2',
    }));
    console.log('Updated cart: ', this.cart());
  }
}
