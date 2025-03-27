import { Component, Signal } from '@angular/core';
import { MovieItemComponent } from './features/movie-item/movie-item.component';
import { Movie } from './core/models/movie.model';
import { MoviesService } from './core/services/movies/movies.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent
  ]
})
export class AppComponent {

  movies: Signal<Movie[]>;

  constructor(public movieService: MoviesService) {
    this.movies = this.movieService.getMovies();
  }
}
