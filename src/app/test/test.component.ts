import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements DoCheck {
  @Input() user: any;
  private previousUserName: string | undefined;

  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      console.log('ngDoCheck called - User name changed to: ', this.user.name);
    }
  }
}
