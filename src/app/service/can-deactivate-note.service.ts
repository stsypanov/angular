import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {NotesEditorComponent} from "../notes-editor/notes-editor.component";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CanDeactivateNote implements CanDeactivate<NotesEditorComponent> {

  constructor() {
  }

  canDeactivate(component: NotesEditorComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let text = component.getNoteText();
    if (text === undefined || text.length === 0) {
      return true;
    }
    window.alert("Editor has text");
    return false;
  }
}
