import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  cursorPosition$?: Observable<{ x: number; y: number }>;

  ngOnInit(): void {
    this.cursorPosition$ = fromEvent<MouseEvent>(window, 'mousemove').pipe(
      map((e) => ({ x: e.clientX, y: e.clientY }))
    );
  }
}
