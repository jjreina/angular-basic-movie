import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-components-movie',
  standalone: false,

  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  @Input()
  public movie!: Movie;

  @Output()
  public movieTitleEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public emitMovieTitle(title: string): void {
    this.movieTitleEventEmitter.emit(title);
  }
}
