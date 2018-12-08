import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  sampleNotes = [

  ]
  public notes: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  updateNote(value) {
    this.notes.next(value);
    localStorage.setItem('notes', value);
  }
}
