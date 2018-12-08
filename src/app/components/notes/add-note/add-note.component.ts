import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  @Output()
  closeAddNote = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeEditor() {
    this.closeAddNote.emit()
  }

}
