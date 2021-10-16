import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Person } from '../Person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [PersonService]
})
export class BookComponent {
  private who: String = 'Umut';

  gonnaAdd: boolean = false;
  show: boolean = false;
  showButtonMessage: String = 'Show';

  items: Person[] = [];
  filteredItems: Person[] = [];

  name: String = '';
  surname: String = '';
  no: String = '';
  mail: String = '';

  fname: string = '';
  fsurname: string = '';
  fno: string = '';
  fmail: string = '';

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe(data =>
    this.items = data);
    this.filteredItems = this.items;
  }

  getName(): String {
    return this.who;
  }

  createCommand(): void {
    this.gonnaAdd = !this.gonnaAdd;
  }

  showButton(): void {
    if (!this.show) {
      this.showButtonMessage = 'Close';
    } else {
      this.showButtonMessage = 'Show';
    }
    this.show = !this.show;
  }

  getBtn() {
    if (this.gonnaAdd) {
      return {
        disabled: this.gonnaAdd,
        'btn-warning': !this.gonnaAdd,
        enabled: !this.gonnaAdd,
        'btn-secondary': this.gonnaAdd
      };
    }
    return {};
  }

  addPerson(): void {
    if (
      this.name == '' ||
      this.surname == '' ||
      this.no == '' ||
      this.mail == ''
    ) {
      alert('Fill in all the gaps');
    } else {
      let x = new Person(this.name, this.surname, this.no, this.mail);
      this.personService.add(x);
      this.personService.getPeople().subscribe(data =>
      this.items = data);
      this.gonnaAdd = false;
      this.name = "";
      this.surname = "";
      this.no = "";
      this.mail = "";
    }
  }

  getItems(): Person[] {
    return this.items;
  }

  cancel(): void {
    this.gonnaAdd = !this.gonnaAdd;
  }

  delete(item: Person): void {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  transform1(items: Person[], f1: string): any {
    f1 = f1.toLowerCase();

    return f1
      ? items.filter((x: Person) => x.name.toLowerCase().indexOf(f1) != -1)
      : items;
  }

  transform2(items: Person[], f2: string): any {
    f2 = f2.toLowerCase();

    return f2
      ? items.filter((x: Person) => x.surname.toLowerCase().indexOf(f2) != -1)
      : items;
  }

  transform3(items: Person[], f3: string): any {
    f3 = f3.toLowerCase();

    return f3
      ? items.filter((x: Person) => x.no.toLowerCase().indexOf(f3) != -1)
      : items;
  }

  transform4(items: Person[], f4: string): any {
    f4 = f4.toLowerCase();

    return f4
      ? items.filter((x: Person) => x.mail.toLowerCase().indexOf(f4) != -1)
      : items;
  }
}
