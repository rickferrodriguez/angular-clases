import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Movietype } from '../movietype';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
})
export class MoviesComponent {
@Input() movies: Array<Movietype> = [];
}
