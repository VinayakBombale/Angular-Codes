import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {

  transform(item: unknown, ...args: unknown[]): unknown {
    if(item === 'A')
    {
      return "Active";
    }
    else if(item === 'D')
    {
      return "Disable"
    }
    else
    {
      return "Invalid";
    }
  }

}
