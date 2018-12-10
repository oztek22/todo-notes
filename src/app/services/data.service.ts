import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { not } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public notes: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {
    if (localStorage.getItem('notes')) {
      let notes = JSON.parse(localStorage.getItem('notes'));
      this.notes.next(notes);
    }
  }

  updateNote(value) {
    this.notes.next(value);
    localStorage.setItem('notes', JSON.stringify(value));
  }

  addNote(note) {
    let current = this.notes.getValue();
    current.push(note);
    this.updateNote(current);
  }
}
