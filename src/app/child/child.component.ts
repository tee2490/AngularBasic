import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() myEvent = new EventEmitter();

  emitEvent() {
    this.myEvent.emit('Event emitted from child component');
  }
}
