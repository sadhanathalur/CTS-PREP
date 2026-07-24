import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadCourses } from '../../store/course/course.actions';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

// Hands-On 9 Task 2 (Step 99): enrolled courses now derived from the NgRx store via the
// cross-slice selectEnrolledCourses selector (joins course + enrollment state).
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  private store = inject(Store);

  enrolledCourses$ = this.store.select(selectEnrolledCourses);

  ngOnInit(): void {
    // Ensure the course slice is populated so the cross-slice selector has data to join.
    this.store.dispatch(loadCourses());
  }
}
