import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { NotificationService } from './services/notification.service';
import { DataService } from './services/data.service';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/notes/note/note.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { environment } from '../environments/environment';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AddNoteComponent,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NotificationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
