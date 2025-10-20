import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }
  deleteItem(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1);
    }
  }
  ngOnInit(): void {
    console.log('App Component is initialized');
  }
}
