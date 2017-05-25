import { Pipe, PipeTransform } from '@angular/core';
import { DISH_TYPE_FORMAT_MAP }  from '../utils/constants';
/*
* Convert the dish type codes returned from the API into a human-friendly format.
*
*/

@Pipe({name: 'dishTypeFormat'})
export class DishTypeFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (DISH_TYPE_FORMAT_MAP.hasOwnProperty(value)) {
      return DISH_TYPE_FORMAT_MAP[value];
    }
    return value;
  }
}
