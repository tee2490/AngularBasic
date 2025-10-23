import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: 'STR_MSG', useValue: 'This is a string message' }],
})
export class AppComponent implements OnInit {
  constructor(@Inject('STR_MSG') public msg: string) {}

  ngOnInit(): void {}
}
