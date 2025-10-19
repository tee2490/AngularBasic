import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  displayComponent: boolean = true;
  toggle(): void {
    this.displayComponent = !this.displayComponent;
  }

  ngOnInit(): void {
    console.log('App Component: OnInit');
  }
}
