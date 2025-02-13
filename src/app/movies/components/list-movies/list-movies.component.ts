import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-components-list-movies',
  standalone: false,

  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css',
})
export class ListMoviesComponent {
  public titleMovieSelected: string = '';

  @Input()
  public movies: Movie[] = [];

  @Output()
  public movieIdEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  public showTitleMovieSelected(title: string): void {
    this.titleMovieSelected = title;
  }

  public emitMovieId(idMovie: string): void {
    this.movieIdEventEmitter.emit(idMovie);
  }
}
