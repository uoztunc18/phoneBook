import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../Person";

@Injectable()
export class PersonService {

    url = "http://localhost:3000/items";

    constructor(private http: HttpClient) {}

    getPeople(): Observable<Person[]> {
        return this.http.get<Person[]>(this.url);
    }

    add(input: Person): void {
        this.http.post(this.url, input).subscribe(data => {
            console.log('POST Request is successful ', data);
          },
          error => {
            console.log('Error', error);
          });
    }
}