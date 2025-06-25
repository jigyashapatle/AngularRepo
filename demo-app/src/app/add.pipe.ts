import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  // transform(val1: number, val2:number): number {
  //   return val1+val2;
  // }

  // transform(...args:any) {
  //   let a=0;
  //   console.log(args.length)
  //   for(let x=0; x<args.length; x++)
  //   {
  //     a+=parseInt(args[x]);
  //     console.log(a);
  //   }

  //   return a;
  // }

  transform(num:number[]) {
    let a=0;
    for(let x=0; x<num.length; x++)
    {
      a+=num[x];
    }
    return a;
  }
}