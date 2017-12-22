import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {DragulaService} from "ng2-dragula";

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

  constructor(private http: Http, private dragulaService: DragulaService) {
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

  onDrop(value) {
    let [bag, elementMoved, targetContainer, srcContainer] = value;
    if (targetContainer.children) {
      let arr = Array.from(targetContainer.children);
      this.sections = arr.map((li: HTMLLIElement) => {
        return {title: li.textContent.trim()}
      });
      this.writeSections().subscribe();
    }
  }

  ngOnInit() {
    this.readSections();
    this.dragulaService.drop.subscribe(this.onDrop.bind(this));
  }

}

export interface Section {
  _id?: string;
  title: string;
}
