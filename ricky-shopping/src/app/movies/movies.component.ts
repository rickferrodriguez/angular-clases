import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

  type MoviesType = {Title: string, Year: string, imdbID: string, Type: string, Poster: string }
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
@Input() movies: Array<MoviesType> = [];
}
