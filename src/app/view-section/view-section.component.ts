import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotesServerService} from "../service/notes-server-service.service";
import {Note} from "../entity/Note";

@Component({
  selector: 'app-view-section',
  templateUrl: './view-section.component.html',
  styleUrls: ['./view-section.component.css']
})
export class ViewSectionComponent implements OnInit {

  section: string;
  notes: Note[] = [];

  constructor(
    private route: ActivatedRoute,
    private noteService: NotesServerService
    ) { }

  ngOnInit() {
    this.section = this.route.snapshot.params['name'];
    this.getNotes().then(notes => this.notes=notes);
  }

  getNotes() {
    return this.noteService.getNotes(this.section);
  }

}
