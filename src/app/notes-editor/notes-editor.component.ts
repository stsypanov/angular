import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {

  section: string;

  constructor() {
  }

  setSection(section: string) {
    this.section = section;
  }

  ngOnInit() {
  }

}
