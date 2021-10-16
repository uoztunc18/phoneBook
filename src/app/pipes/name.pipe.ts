import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Person';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(items: Person[], f1: string): any {
    f1 = f1.toLowerCase();

    return f1
      ? items.filter((x: Person) => x.name.toLowerCase().indexOf(f1) != -1)
      : items;
  }
}
