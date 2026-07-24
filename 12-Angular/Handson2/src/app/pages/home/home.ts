import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // Difference between [property] and [(ngModel)]:
  // [property] is a ONE-WAY binding: data flows only from the component class
  // to the DOM (e.g. [disabled]="!isPortalActive" just reflects the component's
  // value on the element - the DOM cannot write back to the component).
  // [(ngModel)] is a TWO-WAY binding: it combines property binding with event
  // binding ([ngModel] + (ngModelChange)) so data flows both ways - DOM changes
  // (like typing in an input) update the component property, and component
  // changes update the DOM, keeping both in sync.

  ngOnInit(): void {
    // Simulate fetching a count of available courses
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
