import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// Hands-On 10 Task 2: CourseService tested with HttpClientTestingModule.
describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;
  const API_URL = 'http://localhost:3000/courses';

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Step 107
  it('should return courses from GET /courses', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108 — getCourses() retries twice (retry(2)) before propagating the error,
  // so the mock backend sees 3 requests in total (1 original + 2 retries).
  it('should retry twice then emit a friendly error message on repeated failure', done => {
    service.getCourses().subscribe({
      next: () => fail('expected an error, not a value'),
      error: err => {
        expect(err.message).toBe('Failed to load courses. Please try again.');
        done();
      }
    });

    for (let attempt = 0; attempt < 3; attempt++) {
      const req = httpMock.expectOne(API_URL);
      req.flush('server error', { status: 500, statusText: 'Internal Server Error' });
    }
  });

  it('should GET a single course by id', () => {
    service.getCourseById(1).subscribe(course => {
      expect(course.id).toBe(1);
    });

    const req = httpMock.expectOne(`${API_URL}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses[0]);
  });

  it('should POST a new course via createCourse', () => {
    const newCourse = { name: 'New Course', code: 'CS999', credits: 2, gradeStatus: 'pending' as const };
    service.createCourse(newCourse).subscribe(course => {
      expect(course.code).toBe('CS999');
    });

    const req = httpMock.expectOne(API_URL);
    expect(req.request.method).toBe('POST');
    req.flush({ id: 99, ...newCourse });
  });
});
