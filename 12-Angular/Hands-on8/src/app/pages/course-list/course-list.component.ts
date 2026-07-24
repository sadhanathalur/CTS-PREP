import { Component, OnInit, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  private courseService = inject(CourseService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  courses: Course[] = [];
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  selectedCourseId: number | null = null;

  ngOnInit(): void {
    // Hands-On 8 Task 1 (Step 80): subscribe with next/error/complete instead of
    // reading a synchronous array off the service.
    this.courseService.getCourses().subscribe({
      next: courses => (this.courses = courses),
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false)
    });

    // Hands-On 7 Task 1 (Step 71): read the search query param back on init.
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  onSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm) {
      return this.courses;
    }
    const term = this.searchTerm.toLowerCase();
    return this.courses.filter(c => c.name.toLowerCase().includes(term));
  }
}
