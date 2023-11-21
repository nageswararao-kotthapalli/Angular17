import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emp',
  standalone: true
})
export class EmpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
