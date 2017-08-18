import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrlFormatter'
})
export class ImageUrlFormatterPipe implements PipeTransform {

  private imageBaseUrl = 'https://www.cryptocompare.com';

  transform(value: any, args?: any): any {
    return this.imageBaseUrl + value;
  }

}
