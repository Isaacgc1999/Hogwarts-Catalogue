import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyPipe'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string {
    let stringValue = value.toString();

    if(stringValue.includes('-')){
      let [firstValue, secondValue] = stringValue.split('-');
      return '$' + firstValue + ' to ' + ' $' + secondValue + ' million';
    }
    return '$' + value + ' million';
  }
}
