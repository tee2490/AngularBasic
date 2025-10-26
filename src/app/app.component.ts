import { Component, OnInit } from '@angular/core';
import { concatMap, interval, of, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  source$ = of(1, 2, 3);
  ngOnInit(): void {
    this.source$
      .pipe(
        switchMap((val) => {
          console.log('Source value: ', val);
          console.log('Starting new observable');
          return interval(1000).pipe(take(3));
        })
      )
      .subscribe((res) => console.log('Interval value: ' + res));
  }
}
