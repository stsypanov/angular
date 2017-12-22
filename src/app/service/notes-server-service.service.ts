import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Note} from "../entity/Note";

@Injectable()
export class NotesServerService {
  private notesUrl = 'http://localhost:8080/notes';


  constructor(private http: Http) { }


  getNotes(section: string): Promise<Note[]> {
    return this.http
      .get(this.notesUrl + '?section=' + section)
      .toPromise()
      .then(response => response.json() as Note[]);
  }

}
