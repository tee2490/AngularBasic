import { Component, OnInit } from '@angular/core';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = from([
      { name: 'XYZ', age: 25 },
      { name: 'ABC', age: 35 },
    ]);

    const filterAge$ = obs$.pipe(filter((person) => person.age >= 30));
    filterAge$.subscribe((val) =>
      console.log(`Age above 30: \nName: ${val.name}, Age: ${val.age}`)
    );
  }
}
