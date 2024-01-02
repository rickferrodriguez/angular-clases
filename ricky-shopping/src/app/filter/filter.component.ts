import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  @Output() addFilterEvent = new EventEmitter<string>();

  getFilteredMovies(movieName: string) {
    this.addFilterEvent.emit(movieName);
  }
}
