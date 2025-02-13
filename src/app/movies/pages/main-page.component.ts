import { Component, OnInit } from '@angular/core';
import { Movie, MovieResponse } from '../interfaces/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movies-main-page-component',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMoviesFromApi()
      .subscribe((response: MovieResponse) => {
        this.movies = response.movies;
      });
  }

  public removeMovieById(idMovie: string): void {
    this.movies = this.moviesService.removeMovieById(idMovie, this.movies);
  }
}
