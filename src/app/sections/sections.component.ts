import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  private sectionsUrl = 'http://localhost:8080/sections';

  sections: Section[];
  activeSection = "";

  @Output()
  sectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  constructor(private http: Http) {
  }

  addSection(newSection: HTMLInputElement) {
    let title: string = newSection.value;

    if (this.sections.map(s => s.title).find(t => t === title)) {
      return;
    }

    const section: Section = {title};
    this.sections.unshift(section);
    this.showSection(section);

    this.writeSections().subscribe(res => newSection.value = "");
  }

  writeSections() {
    return this.http.post(this.sectionsUrl + '/replace', this.sections);
  }

  showSection(section: Section) {
    this.activeSection = section.title;
    this.sectionChanged.emit(this.activeSection);
  }

  readSections() {
    this.getSections().subscribe(sections => {
      this.sections = sections;
      this.showSection(sections[0]);
    });
  }

  getSections(): Observable<Section[]> {
    return this.http.get(this.sectionsUrl)
      .map(response => response.json() as Section[]);
  }


  ngOnInit() {
    this.readSections();
  }

}

export interface Section {
  _id?: string;
  title: string;
}
