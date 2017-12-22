import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotesComponent} from './notes/notes.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SectionsComponent} from './sections/sections.component';
import {SectionFilterPipe} from "./sections/section.filter.pipe";
import {DragulaModule, DragulaService} from "ng2-dragula";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SectionsComponent,
    SectionFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
