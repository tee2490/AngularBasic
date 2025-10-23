import { Component } from '@angular/core';
import { CubeService } from '../services/cube.service';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  providers: [CubeService, PowerService],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  constructor(public cubeService: CubeService) {}

  calcCube(): number {
    return this.cubeService.calculateCube(5);
  }
}
