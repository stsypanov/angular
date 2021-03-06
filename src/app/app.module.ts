import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NotesComponent} from './notes/notes.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {SectionsComponent} from './sections/sections.component';
import {SectionFilterPipe} from "./sections/section.filter.pipe";
import {DragulaModule, DragulaService} from "ng2-dragula";
import {RouterModule, Routes} from "@angular/router";
import {NotesEditorComponent} from './notes-editor/notes-editor.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ViewSectionComponent} from './view-section/view-section.component';
import {NotesServerService} from "./service/notes-server-service.service";
import {CanDeactivateNote} from "./service/can-deactivate-note.service";
import { UserFormComponent } from './user-form/user-form.component';
import { EqualToValidatorDirective } from './directive/equal-to-validator.directive';
import { UserUniqueValidator } from './directive/user-unique-validator.directive';

const appRoutes: Routes = [
  {path: 'register', component: UserFormComponent},
  {path: '', component: NotesEditorComponent, canDeactivate: [CanDeactivateNote]},
  {path: ':name', component: NotesEditorComponent, canDeactivate: [CanDeactivateNote]},
  {path: 'viewSection/:name', component: ViewSectionComponent},

  /*must be the last one*/
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SectionsComponent,
    SectionFilterPipe,
    NotesEditorComponent,
    PageNotFoundComponent,
    ViewSectionComponent,
    UserFormComponent,
    EqualToValidatorDirective,
    UserUniqueValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DragulaService, NotesServerService, CanDeactivateNote],
  bootstrap: [AppComponent]
})
export class AppModule { }
