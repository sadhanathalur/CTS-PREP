import { Injectable } from '@angular/core';

// No providedIn: 'root' here on purpose — this service is provided at the
// component level (see NotificationComponent) rather than as an app-wide
// singleton, so each component instance gets its own isolated notifications.
@Injectable()
export class Notification {
  private messages: string[] = [];

  notify(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
