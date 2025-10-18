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
  applyVal = {
    color: 'darkgreen',
    'font-style': 'italic',
    'font-size': '35px',
    'font-weight': 'bold',
  };

  // colorVal: string = 'navy';
  // fontSize: string = '30px';
  // isItalic: string = 'italic';
}
