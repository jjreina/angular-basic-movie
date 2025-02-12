import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { MainPageComponent } from './pages/main-page.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [MovieComponent, ListMoviesComponent, MainPageComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
  providers: [provideHttpClient()],
})
export class MoviesModule {}
