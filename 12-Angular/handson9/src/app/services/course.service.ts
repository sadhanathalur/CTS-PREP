import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

// Hands-On 8 Task 1: CourseService now talks to the mock REST API (json-server)
// instead of holding a hardcoded in-memory array.
const API_URL = 'http://localhost:3000/courses';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private http = inject(HttpClient);

  // Step 79 + Step 83-86: map/tap/catchError/retry pipeline.
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      retry(2),
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  // Step 79: single course lookup by id.
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load course. Please try again.'));
      })
    );
  }

  // Step 81: create.
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to create course.'));
      })
    );
  }

  // Step 82: update.
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to update course.'));
      })
    );
  }

  // Step 82: delete.
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to delete course.'));
      })
    );
  }
}
