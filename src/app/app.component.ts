import { Component, OnInit } from '@angular/core';
import { concatMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  scrObs$ = of(1, 2, 3);
  innerObs$ = of('A', 'B', 'C');
  ngOnInit(): void {
    this.scrObs$
      .pipe(
        concatMap((val) => {
          console.log('Source Value: ', val);
          console.log('Starting new observable');
          return this.innerObs$;
        })
      )
      .subscribe((res) => console.log('Reading' + res));
  }
}
