import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCalculator'
})
export class PriceCalculatorPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    const calculatedPrice = (value * args).toFixed(5);
    return calculatedPrice;
  }

}
