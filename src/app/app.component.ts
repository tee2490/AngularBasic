import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const m = new Map();
    m.set(1, 'Hello');
    m.set(2, 'Converting Map() to Observable');

    const mapObs = from(m);
    mapObs.subscribe((val) => console.log(val));
  }
}
