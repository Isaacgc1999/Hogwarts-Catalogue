import { Component, Signal } from '@angular/core';
import { MoviesService } from '../../core/services/movies/movies.service';
import { FavoritesService } from '../../core/services/favorites/favorites.service';
import { Movie } from '../../core/models/movie.model';
import { MovieItemComponent } from '../../features/movie-item/movie-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MovieItemComponent,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies: Signal<Movie[]>;

  constructor(public movieService: MoviesService, public favoritesService: FavoritesService) {
    this.movies = this.movieService.getMovies();
  }

  handleToggleFavorite(movie: Movie): void {
    this.favoritesService.toggleFavorite(movie);
  }
}
