import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 8 Task 3 (Step 91): backs the global loading spinner shown while HTTP calls are in flight.
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingCount = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  show(): void {
    this.loadingCount++;
    this.isLoadingSubject.next(true);
  }

  hide(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    this.isLoadingSubject.next(this.loadingCount > 0);
  }
}
