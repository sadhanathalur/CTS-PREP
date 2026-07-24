import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // Component-level provider: this creates a NEW, separate instance of
  // Notification scoped to this component (and its children), rather than
  // reusing the app-wide singleton that providedIn: 'root' would give.
  // Useful when each component instance needs its own isolated state —
  // e.g. multiple <app-notification> instances on the same page would each
  // keep their own independent list of messages instead of sharing one.
  providers: [Notification]
})
export class NotificationComponent {
  constructor(private notificationService: Notification) {}

  get messages(): string[] {
    return this.notificationService.getMessages();
  }

  addSampleNotification(): void {
    this.notificationService.notify('Sample notification at ' + new Date().toLocaleTimeString());
  }
}
