import { Component, OnInit, inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';

// Hands-On 7 Task 1 (Steps 68-69): reads the :id route param and loads the matching course.
// Hands-On 8 Task 2 (Step 87): demonstrates switchMap chaining a second HTTP call.
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private courseService = inject(CourseService);
  private enrollmentService = inject(EnrollmentService);

  course: Course | undefined;
  isLoading = true;
  errorMessage = '';

  students: Student[] = [];
  studentsLoading = false;

  // Emits the selected courseId; switchMap cancels any in-flight student request
  // for a previous courseId if a new one arrives before it completes.
  private selectedCourseId$ = new Subject<number>();

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.courseService.getCourseById(id).subscribe({
      next: course => (this.course = course),
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false)
    });

    this.selectedCourseId$
      .pipe(switchMap(courseId => this.enrollmentService.getStudentsByCourse(courseId)))
      .subscribe({
        next: students => {
          this.students = students;
          this.studentsLoading = false;
        },
        error: () => (this.studentsLoading = false)
      });

    this.studentsLoading = true;
    this.selectedCourseId$.next(id);
  }
}
