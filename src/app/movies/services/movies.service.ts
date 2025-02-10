import { Injectable } from '@angular/core';
import { moviesMock } from '../../data/mocks/mockDataMovies';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  public getMovies(): Movie[] {
    return moviesMock;
  }
}
