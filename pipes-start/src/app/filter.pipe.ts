import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // Setting pure to false make Angular recall pipe whenever the output value is changed
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if ( value.lenth === 0 ) {
      return value;
    }
    const resultArray = [];
    for ( const item of value ) {
      if ( item[propName].search(filterString) !== -1 ) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
