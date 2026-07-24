import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

// Hands-On 7 Task 2 (Step 73): lazily-loaded route table for the enrollment feature.
// Loaded on demand via loadChildren from app.routes.ts.
export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./enrollment-form/enrollment-form.component').then(m => m.EnrollmentFormComponent)
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('./reactive-enrollment-form/reactive-enrollment-form.component').then(
        m => m.ReactiveEnrollmentFormComponent
      ),
    canDeactivate: [unsavedChangesGuard]
  }
];
