import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgClass, NgStyle, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,
    AsyncPipe, CreditLabelPipe, HighlightDirective
  ],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  private router = inject(Router);
  private store = inject(Store);

  // Hands-On 9 Task 2 (Step 100): drives the Enroll/Unenroll button label via the async pipe.
  enrolledIds$: Observable<number[]> = this.store.select(selectEnrolledIds);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }

  cardClasses(enrolledIds: number[] | null) {
    return {
      'card--enrolled': !!enrolledIds?.includes(this.course.id),
      'card--full': this.course?.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Hands-On 9 Task 2 (Step 100): dispatches enrollInCourse / unenrollFromCourse instead
  // of calling EnrollmentService directly — state now lives in the NgRx store.
  onEnrollClick(enrolledIds: number[] | null): void {
    if (enrolledIds?.includes(this.course.id)) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.enrollRequested.emit(this.course.id);
    }
  }

  // Hands-On 7 Task 1 (Step 70): navigate to the course detail route on card click.
  viewDetails(): void {
    this.router.navigate(['courses', this.course.id]);
  }
}
