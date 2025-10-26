import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = interval(1000); // ส่งค่าทุก 1 วินาที
    const obsSubscribe = obs$.subscribe((value) => console.log(value));

    setInterval(() => {
      obsSubscribe.unsubscribe();
    }, 10000); // ยกเลิกการ subscribe หลังจาก 10 วินาที
  }
}
