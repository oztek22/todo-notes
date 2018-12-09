import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  addNote = false;
  editMode = false;
  notesFilter = "all";
  notes = [];
  prevHours;
  constructor(private dataService: DataService, private notificationService: NotificationService) {
    this.dataService.notes.subscribe((val) => {
      if (val) {
        console.log(val);
        this.notes = val;
      }
    })
  }

  ngOnInit() {

    /**
     * This was setup for push Notification. we can use it If we want to use cron job
      navigator.serviceWorker.ready.then((registration) => {
        console.log("registartionnnnn", registration)
        this.notificationService.initializedNotification(registration);
      });
    */

    this.notificationService.initializeNotification();
    setInterval(() => { this.checkUpcomingDeadlines(); }, 60000);
    this.checkDeadlines();
  }

  checkUpcomingDeadlines() {
    let current = new Date();
    let checkUpcomingtasks = false;
    if (!this.prevHours || this.prevHours != current.getHours()) {
      checkUpcomingtasks = true;
      this.prevHours = current.getHours();
    }
    this.notes.forEach(element => {
      if (element.dueDate) {
        let newDate = new Date(element.dueDate)
        if (newDate >= current) {
          if (newDate.getMonth() == current.getMonth() && newDate.getDate() == current.getDate() &&
            newDate.getHours() == current.getHours() && newDate.getMinutes() == current.getMinutes()) {
            this.notificationService.sendNotification(element.label, "Current Task");
            this.wait(2000);
          } else if (checkUpcomingtasks && newDate.getMonth() == current.getMonth() && newDate.getDate() == current.getDate() &&
            newDate.getHours() == current.getHours()) {
            this.notificationService.sendNotification(element.label, "Task Will due within an Hour");
            this.wait(2000);
          }
        }
      }
    });
  }

  checkDeadlines() {
    let current = new Date();
    this.notes.forEach(element => {
      if (element.dueDate) {
        let newDate = new Date(element.dueDate)
        if (newDate <= current) {
          if (newDate.getMonth() == current.getMonth() && newDate.getDate() == current.getDate()) {
            this.notificationService.sendNotification(element.label, "Task Overdue today");
            this.wait(2000);
          } else {
            this.notificationService.sendNotification(element.label, "Task already Overdue");
            this.wait(2000);
          }
        }
      }
    });
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  showAddNote() {
    this.addNote = true;
  }

  closeAddNote() {
    this.addNote = false;
  }

  changeEditMode(value) {
    this.notes = this.notes.map((e) => {
      e.isRemove = false;
      return e;
    });
    this.dataService.updateNote(this.notes);
    this.editMode = value;
  }

  removeNotes() {
    console.log(this.notes);
    this.notes.forEach((element, index) => {
      if (element.isRemove) {
        this.notes.splice(index, 1);
      }
    });
    this.dataService.updateNote(this.notes);
  }

  updateNotesFilter(val) {
    this.notesFilter = val;
  }

}
