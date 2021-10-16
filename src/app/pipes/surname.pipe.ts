import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Person';

@Pipe({
  name: 'surname'
})
export class SurnamePipe implements PipeTransform {
  transform(items: Person[], f2: string): any {
    f2 = f2.toLowerCase();

    return f2
      ? items.filter((x: Person) => x.surname.toLowerCase().indexOf(f2) != -1)
      : items;
  }
}
