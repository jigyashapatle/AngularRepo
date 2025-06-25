import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class CalcPipe implements PipeTransform {

  transform(val1: number): unknown {
    return (val1*val1);
  }

}
