import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  initializeNotification() {
    if (!window['Notification']) {
      console.log("This browser does not support notifications.");
    } else if (Notification['permission'] !== 'denied') {
      Notification.requestPermission(function (permission) { });
    }
  }

  sendNotification(msg, title?) {
    if (Notification['permission'] === "granted") {
      // If it's okay let's create a notification

      var img = '/assets/icons/icon-128x128.png';
      var text = msg; // 'HEY! Your task is now overdue.';
      var notification = new Notification(title ? title : "Due Task", { body: text, icon: img });

      // window.navigator.vibrate(500);
    }
  }
}
