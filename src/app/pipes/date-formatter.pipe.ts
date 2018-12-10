import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);
    return date.getDate() + ' / ' + date.getMonth();
  }

}
