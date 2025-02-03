import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [MovieComponent, ListMoviesComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class MoviesModule {}
