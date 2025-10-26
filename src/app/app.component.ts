import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = of('new york', 'london', 'berlin', 'chicago');
    const newObs$ = obs$.pipe(map((str) => str.toUpperCase()));

    newObs$.subscribe((val) => console.log(`New Observable: ${val}`));
  }
}
