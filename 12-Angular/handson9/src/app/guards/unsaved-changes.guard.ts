import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../features/enrollment/reactive-enrollment-form/reactive-enrollment-form.component';

// Hands-On 7 Task 2 (Step 77): warns before leaving a dirty reactive form.
export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentFormComponent> = (component) => {
  if (component.enrollForm.dirty) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
