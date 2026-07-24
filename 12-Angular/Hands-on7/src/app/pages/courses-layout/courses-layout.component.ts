import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Hands-On 7 Task 1 (Step 72): parent shell for the nested /courses routes.
@Component({
  selector: 'app-courses-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.css']
})
export class CoursesLayoutComponent {}
