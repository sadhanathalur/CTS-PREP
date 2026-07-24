import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/student.model';

// Hands-On 9: enrolled-course state (enroll/unenroll/isEnrolled/getEnrolledCourses) now
// lives in the NgRx store (store/enrollment/) instead of this service — see
// enrollment.actions.ts, enrollment.reducer.ts, enrollment.selectors.ts.
// This service keeps the one HTTP concern that isn't app state: fetching the
// roster of students enrolled in a given course (Hands-On 8, Step 87).
const STUDENTS_URL = 'http://localhost:3000/students';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private http = inject(HttpClient);

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(STUDENTS_URL, { params: { courseId } }).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load enrolled students.'));
      })
    );
  }
}
