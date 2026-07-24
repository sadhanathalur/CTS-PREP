import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses: Course[] = [];

  selectedCourseId: number | null = null;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves *ngFor performance: without it, Angular uses object identity
  // and re-renders every DOM node in the list on any array change (e.g. a new
  // array reference from an API refresh). With trackBy returning a stable id,
  // Angular only creates/destroys/updates the DOM nodes for items that actually
  // changed, reusing existing nodes for unchanged items.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
