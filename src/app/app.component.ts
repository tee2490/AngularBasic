import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SumOfNumbersPipe } from './sum-of-numbers-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, SumOfNumbersPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myArray = [1, 2, 3];

  updateValue() {
    this.myArray.push(5);
  }
}
