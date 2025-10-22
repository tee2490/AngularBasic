import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products: { name: string; imageUrl: string }[] = [
    {
      name: 'Mastering CSS with Sass & Bootstrap + Interview Questions',
      imageUrl: 'assets/Html-CSS.jpg',
    },
    {
      name: 'Mastering Angular + Angular + Interview + E-commerce App ',
      imageUrl: 'assets/Angular.jpg',
    },
    {
      name: 'JavaScript - Marathon Interview Questions Series',
      imageUrl: 'assets/JS_Course.png',
    },
    {
      name: 'Mastering React With Interview Questions, eStore Project',
      imageUrl: 'assets/React_Course.png',
    },
    {
      name: 'Mastering TypeScript with Marathon Interview Questions',
      imageUrl: 'assets/TypeScript.jpg',
    },
    {
      name: 'Practical Database Guide with RDBMS(MySQL) & NoSQL(MongoDB)',
      imageUrl: 'assets/RDBMS.png',
    },
    {
      name: 'Mastering Bun - The Modern Fullstack Development',
      imageUrl: 'assets/Bun.jpg',
    },
    {
      name: 'Mastering NestJS + Interview Question Series',
      imageUrl: 'assets/NestJS.jpg',
    },
  ];

  pgSize: number = 4;
  startIndex: number = 0;
  endIndex: number = this.pgSize;

  previousPage() {
    if (this.startIndex > 0) {
      this.startIndex -= this.pgSize;
      this.endIndex -= this.pgSize;
    }
  }

  nextPage() {
    if (this.endIndex < this.products.length) {
      this.startIndex += this.pgSize;
      this.endIndex += this.pgSize;
    }
  }
}
