import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationOldService {

  swRegistration;
  isSubscribed;
  subscription;
  applicationServerPublicKey =
    "BFSQKa0ee8vBC-ZBT9zkBvilziX3AVf6K8e4rvyZFQkmFAdyeJiDx2np4oZ0bNoLDY9GoipH6iiPTavkbflBAsQ";
  constructor() {
  }

  requestNotification() {
    Notification.requestPermission().then(function (result) {
      console.log(result);
    });
  }

  initializedNotification(swReg) {
    this.swRegistration = swReg;
    // Set the initial subscription value
    this.swRegistration.pushManager.getSubscription().then((subscription) => {
      this.isSubscribed = !(subscription === null);

      if (this.isSubscribed) {
        console.log("User IS already subscribed.");
        console.log(subscription);
        console.log(JSON.stringify(subscription));
        this.subscription = JSON.stringify(subscription);
      } else {
        console.log("User is NOT subscribed.");
        this.subscribeUser();
      }
    });
  }

  subscribeUser() {
    const applicationServerKey = this.urlB64ToUint8Array(this.applicationServerPublicKey);
    this.swRegistration.pushManager
      .subscribe({
        userVisibleOnly: true
      })
      .then((subscription) => {
        console.log("User is subscribed.");
        console.log(subscription);
        console.log(JSON.stringify(subscription));
        // this.updateSubscriptionOnServer(subscription);
        this.subscription = JSON.stringify(subscription);
        this.isSubscribed = true;

      })
      .catch((err) => {
        console.log("Failed to subscribe the user: ", err);
      });
  }

  urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}
