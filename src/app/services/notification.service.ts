import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  initializeNotification() {
    if (!window['Notification']) {
    } else if (Notification['permission'] !== 'denied') {
      Notification.requestPermission(function (permission) { });
    }
  }

  sendNotification(msg, title?) {
    if (Notification['permission'] === 'granted') {
      // If it's okay let's create a notification

      const img = '/assets/icons/icon-128x128.png';
      const text = msg; // 'HEY! Your task is now overdue.';
      const notification = new Notification(title ? title : 'Due Task', { body: text, icon: img });

      // window.navigator.vibrate(500);
    }
  }
}
