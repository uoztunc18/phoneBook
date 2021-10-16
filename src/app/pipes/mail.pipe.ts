import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Person';

@Pipe({
  name: 'mail'
})
export class MailPipe implements PipeTransform {
  transform(items: Person[], f4: string): any {
    f4 = f4.toLowerCase();

    return f4
      ? items.filter((x: Person) => x.mail.toLowerCase().indexOf(f4) != -1)
      : items;
  }
}
