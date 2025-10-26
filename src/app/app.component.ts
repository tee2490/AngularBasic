import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    timer(0, 1000).subscribe((val) => console.log(`Timer value: ${val}`));
    interval(1000).subscribe((val) => console.log(`Interval value: ${val}`));
  }
}
