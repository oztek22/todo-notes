import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  noteData = {
    label: "",
    isTodo: false,
    createdAt: null,
    dueDate: null
  }
  @Output()
  closeAddNote = new EventEmitter<any>();
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  closeEditor() {
    this.closeAddNote.emit()
  }

  AddNote() {
    console.log(this.noteData);
    if (!this.noteData.isTodo) {
      this.noteData.dueDate = null;
    }
    this.noteData.createdAt = new Date();
    // console.log(this.noteData.dueDate.getTime())
    this.dataService.addNote(this.noteData);
    this.closeEditor();
  }

}
