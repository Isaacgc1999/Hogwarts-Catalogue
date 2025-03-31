import { Component, Signal } from '@angular/core';
import { MovieItemComponent } from './features/movie-item/movie-item.component';
import { Movie } from './core/models/movie.model';
import { MoviesService } from './core/services/movies/movies.service';
import { CommonModule } from '@angular/common';
import { FavoritesService } from './core/services/favorites/favorites.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent,
    CommonModule
  ]
})
export class AppComponent {

  movies: Signal<Movie[]>;

  constructor(public movieService: MoviesService, public favoritesService: FavoritesService) {
    this.movies = this.movieService.getMovies();
  }

  handleToggleFavorite(movie: Movie): void {
    this.favoritesService.toggleFavorite(movie);
  }
}
