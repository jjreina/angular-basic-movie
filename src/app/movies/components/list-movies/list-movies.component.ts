import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-components-list-movies',
  standalone: false,

  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent {
  @Input()
  public movies: Movie[] = [];
}
