import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
