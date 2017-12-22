import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnChanges {

  private notesUrl = 'http://localhost:8080/notes';

  text: string;

  notes: Note[] = [];

  @Input()
  section: string;

  constructor(private http: Http) {
  }

  add() {

    let note = { text: this.text, section: this.section };

    // let reqHeaders = new Headers();
    // reqHeaders.append("Origin", "localhost:3000");

    this.http
      .post(this.notesUrl, note)
      .toPromise()
      .then(resp =>
        {
          this.notes.push(note);
          this.text = "";
        }
      );
  }

  remove(idx) {
    this.notes.splice(idx, 1);
  }

  getNotes(): Promise<Note[]> {
    return this.http
      .get(this.notesUrl + '?section=' + this.section)
      .toPromise()
      .then(response => response.json() as Note[]);
  }

  ngOnInit() {
  }

  ngOnChanges()
  {
    this.getNotes()
      .then(notes =>
      {
        this.notes = notes;
        console.log(notes);
      });
  }

}

interface Note {
  text: string;
  section: string;
}
