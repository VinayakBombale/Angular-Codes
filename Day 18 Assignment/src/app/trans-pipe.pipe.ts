import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transPipe'
})
export class TransPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
