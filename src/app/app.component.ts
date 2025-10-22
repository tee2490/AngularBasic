import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convertWeight() {
    this.weightInKilograms = this.weightInPounds * 0.453592;
  }
}
