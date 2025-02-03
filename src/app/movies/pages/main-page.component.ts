import { Component } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { moviesMock } from '../../data/mocks/mockDataMovies';

@Component({
  selector: 'movies-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent {
  constructor() {}

  public movies: Movie[] = moviesMock;
}
