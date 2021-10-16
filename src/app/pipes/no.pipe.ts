import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Person';

@Pipe({
  name: 'no'
})
export class NoPipe implements PipeTransform {
  transform(items: Person[], f3: string): any {
    f3 = f3.toLowerCase();

    return f3
      ? items.filter((x: Person) => x.no.toLowerCase().indexOf(f3) != -1)
      : items;
  }
}
