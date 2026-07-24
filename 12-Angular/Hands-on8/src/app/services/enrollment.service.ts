import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

const STUDENTS_URL = 'http://localhost:3000/students';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private http = inject(HttpClient);
  // Hands-On 6 Step 64: service-to-service injection — EnrollmentService uses CourseService.
  private courseService = inject(CourseService);

  private enrolledCourseIds: number[] = [];

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Resolves enrolled IDs to full Course objects via the (now HTTP-backed) CourseService.
  getEnrolledCourses(): Observable<Course[]> {
    if (this.enrolledCourseIds.length === 0) {
      return of([]);
    }
    return forkJoin(this.enrolledCourseIds.map(id => this.courseService.getCourseById(id)));
  }

  // Hands-On 8 Task 2 (Step 87): loads students enrolled in a given course.
  // Consumed via switchMap so a new courseId selection cancels the previous in-flight request.
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_URL, { params: { courseId } }).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load enrolled students.'));
      })
    );
  }
}
