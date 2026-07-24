import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  private enrollmentService = inject(EnrollmentService);

  enrolledCourses: Course[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.enrollmentService.getEnrolledCourses().subscribe({
      next: courses => (this.enrolledCourses = courses),
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false)
    });
  }
}
