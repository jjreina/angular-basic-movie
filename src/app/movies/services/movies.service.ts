import { Injectable } from '@angular/core';
import { moviesMock } from '../../data/mocks/mockDataMovies';
import { Movie, MovieResponse } from '../interfaces/movie.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly url: string = 'http://localhost:3000/response';
  constructor(private http: HttpClient) {}

  public getMoviesFromApi(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.url);
  }

  public removeMovieById(idMovie: string, movies: Movie[]): Movie[] {
    return movies.filter((movie: Movie) => movie.id !== idMovie);
  }
}
