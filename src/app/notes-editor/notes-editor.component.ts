import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {

  section: string;
  noteText: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params
      .map(params => params["name"])
      .subscribe(section => this.section = section);
  }

  setSection(section: string) {
    this.router.navigate([section]);
  }

  ngOnInit() {
  }

  setNoteText(noteText: string) {
    this.noteText = noteText;
  }

  public getNoteText(): string {
    return this.noteText;
  }
}
