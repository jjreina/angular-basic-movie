import { Component } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { moviesMock } from '../../data/mocks/mockDataMovies';

@Component({
  selector: 'app-components-movies',
  standalone: false,

  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  public movies: Movie[] = moviesMock;
}
