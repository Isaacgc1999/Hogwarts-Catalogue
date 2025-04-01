import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MoviesService } from '../../core/services/movies/movies.service';
import { NgOptimizedImage } from '@angular/common';
import { MoneyPipe } from '../../shared/pipes/moneyPipe/money.pipe';
import { DurationPipe } from '../../shared/pipes/durationPipe/duration.pipe';
import { MovieDetails } from '../../core/models/movie.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-movie-details',
  imports: [NgOptimizedImage, MoneyPipe, DurationPipe, RouterModule],
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movieId: string = this.route.snapshot.paramMap.get('id') ?? '';
  movieService = inject(MoviesService);
  protected movie;

  constructor(private route: ActivatedRoute) {
    this.movieId = this.route.snapshot.paramMap.get('id') ?? '';
    this.movie = this.movieService.getMovieDetails(this.movieId);
  }
}
