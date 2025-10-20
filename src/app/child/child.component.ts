import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit, OnDestroy {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is initialized');
  }
  ngOnDestroy(): void {
    console.log('Child Component is destroyed');
  }
}
