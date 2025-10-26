import { Component, OnInit } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  outerObservable$ = from([1, 2, 3, 4, 5]);
  innerObservable$ = (value: number) => of(value * 2);

  flattenObservable$ = this.outerObservable$.pipe(
    mergeMap(this.innerObservable$)
  );

  ngOnInit(): void {
    this.flattenObservable$.subscribe((res) => console.log(res));
  }
}
