import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
}

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  // Local enrolled flag (course-card scoped) — an EnrollmentService is
  // introduced later, so enrollment state is tracked here for now.
  enrolled = false;

  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Previous course:', changes['course'].previousValue);
      console.log('Current course:', changes['course'].currentValue);
    }
  }

  onEnroll(): void {
    this.enrolled = true;
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Border colour driven by gradeStatus, used with [ngStyle].
  get gradeBorderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      case 'pending':
        return 'grey';
      default:
        return 'transparent';
    }
  }

  // Getter keeps the template clean — the template just binds [ngClass]="cardClasses"
  // instead of repeating the conditional expressions for every class inline.
  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };
  }
}
