import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationService } from './services/notification.service';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/notes/note/note.component';
import { AddNoteComponent } from './components/notes/add-note/add-note.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
