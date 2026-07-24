import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  searchTerm = '';

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    console.log(this.searchTerm);
  }
}
