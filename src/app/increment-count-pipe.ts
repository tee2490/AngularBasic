import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementCount',
  standalone: true,
  pure: true,
})
export class IncrementCountPipe implements PipeTransform {
  transform(value: number): number {
    console.log('Counter incremented to: ', value);
    return value;
  }
}
