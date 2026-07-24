import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget {
  // Injects the same root-provided CourseService singleton used elsewhere
  // in the app (e.g. CourseListComponent, HomeComponent). Using a getter
  // (rather than caching the count in ngOnInit) means this always reflects
  // the service's current state — if a course is added anywhere in the app,
  // this count updates on the next change detection cycle, proving both
  // components share the same CourseService instance.
  constructor(private courseService: CourseService) {}

  get courseCount(): number {
    return this.courseService.getCourses().length;
  }
}
