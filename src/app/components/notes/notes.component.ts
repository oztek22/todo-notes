import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  addNote = false;
  editMode = false;
  constructor() { }

  ngOnInit() {
  }

  showAddNote() {
    this.addNote = true;
  }

  closeAddNote() {
    this.addNote = false;
  }

  changeEditMode(value) {
    this.editMode = value;
  }

}
