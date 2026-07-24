import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { NotificationComponent } from '../../components/notification/notification';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, CourseSummaryWidget, NotificationComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  constructor(private courseService: CourseService) {}

  // Live count read from the shared CourseService singleton.
  get coursesAvailable(): number {
    return this.courseService.getCourses().length;
  }

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
