import { Component, EventEmitter, Input, OnInit, Output, Signal } from '@angular/core';
import { MoneyPipe } from '../../shared/pipes/moneyPipe/money.pipe';
import { DurationPipe } from '../../shared/pipes/durationPipe/duration.pipe';
import { Movie } from '../../core/models/movie.model';
import { HighlightDirective } from '../../shared/directives/highlightDirective/highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../core/services/favorites/favorites.service';




@Component({
  selector: 'app-movie-item',
  templateUrl: 'movie-item.component.html',
  styleUrls: [ 'movie-item.component.scss' ],
  standalone: true,
  imports: [MoneyPipe,
    DurationPipe,
    HighlightDirective,
    FontAwesomeModule,
    CommonModule]
})
export class MovieItemComponent {
  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;
  @Input() movie!: Movie;
  @Input() favorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<Movie>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.movie);
  }
}

