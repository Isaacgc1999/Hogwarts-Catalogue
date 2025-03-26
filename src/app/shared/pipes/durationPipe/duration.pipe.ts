import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let hours = 0;
    let minutes = 0;

    hours = Math.floor(value / 60);
    value = value - (hours*60);
    minutes = value;

    return hours + 'h ' + minutes + ' min';
  }
}
