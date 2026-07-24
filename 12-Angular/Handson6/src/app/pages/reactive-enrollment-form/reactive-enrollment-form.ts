import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

// Custom synchronous validator: rejects course codes starting with the
// disallowed 'XX' prefix.
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && String(value).startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ),
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Async validator: simulates a server-side "email already taken" check.
  // Async validators run only after all sync validators pass, avoiding
  // unnecessary calls for an already-invalid value.
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value && String(control.value).includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  // Typed getter for the FormArray — this is better than casting in the
  // template (e.g. $any(enrollForm.get('additionalCourses')).controls)
  // because the cast happens once here in a type-safe way, and the template
  // just uses a strongly-typed FormArray directly.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());

    // enrollForm.value only includes ENABLED controls' values.
    // enrollForm.getRawValue() includes ALL controls' values, even disabled
    // ones — useful when a control is disabled for display purposes but its
    // value still needs to be submitted.
  }
}
