import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { MoviesComponent } from './movies/movies.component';
import { Search } from '../mocks/with_results.json';
import { Movietype } from './movietype';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FilterComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ricky-shopping';
  movieData: Movietype[] = Search;
  filteredMovies: Movietype[] = [];

  getFilteredMovies(name: string) {
    if(name === '') {
      this.filteredMovies = [];
      return
    } else {
      this.filteredMovies = this.movieData.filter(movie => movie.Title.toLowerCase().includes(name.toLowerCase()));
      // this.filteredMovies = this.movieData
    }
  }
}
