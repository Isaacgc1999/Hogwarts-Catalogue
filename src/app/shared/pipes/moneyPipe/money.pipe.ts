import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyPipe'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {
    return '$' + value + ' million';
  }
}
