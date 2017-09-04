import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyDataFormatter'
})
export class CurrencyDataFormatterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value;
    }

}
