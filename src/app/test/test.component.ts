import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('Test Component: OnInit');
  }

  ngOnDestroy(): void {
    console.log('Test Component: OnDestroy');
  }
}
