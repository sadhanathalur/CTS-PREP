import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../../services/course.service';

// Hands-On 4: Template-driven Enrollment Request form.
// Hands-On 8 Task 1 (Step 81): submit also demonstrates a POST via CourseService.createCourse.
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './enrollment-form.component.html',
  styleUrls: ['./enrollment-form.component.css']
})
export class EnrollmentFormComponent {
  private courseService = inject(CourseService);

  studentName = '';
  studentEmail = '';
  courseId: number | null = null;
  preferredSemester = 'Odd';
  agreeToTerms = false;
  submitted = false;
  errorMessage = '';

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (!form.valid) {
      return;
    }

    this.courseService
      .createCourse({
        name: `Enrollment request from ${this.studentName}`,
        code: `REQ-${this.courseId}`,
        credits: 0,
        gradeStatus: 'pending'
      })
      .subscribe({
        next: () => (this.submitted = true),
        error: err => (this.errorMessage = err.message)
      });
  }
}

