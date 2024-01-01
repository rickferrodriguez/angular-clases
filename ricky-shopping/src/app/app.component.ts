import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { MoviesComponent } from './movies/movies.component';
import { Search } from '../mocks/with_results.json';

type MoviesType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FilterComponent, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ricky-shopping';
  movieData: MoviesType[] = Search;
}
