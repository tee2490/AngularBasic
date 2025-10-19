import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  count: number = 0;
  countInterval: any;

  startCounter() {
    this.countInterval = setInterval(() => {
      if (this.count <= 5) {
        console.log(this.count++);
      } else {
        clearInterval(this.countInterval);
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.startCounter();
  }

  // constructor() {
  //   this.startCounter();
  // }
}
