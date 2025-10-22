import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SortNumbersPipe } from './sort-numbers-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SortNumbersPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  numbers: number[] = [3, 5, 1, 4, 2];
  sortOrder: 'asc' | 'desc' = 'asc';
  showList: boolean = false;

  showSorting() {
    this.showList = true;
  }
}
