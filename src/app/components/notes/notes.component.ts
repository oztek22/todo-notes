import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  addNote = false;
  editMode = false;
  notes = [];
  constructor(private dataService: DataService) {
    this.dataService.notes.subscribe((val) => {
      if (val) {
        console.log(val);
        this.notes = val;
      }
    })
  }

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
