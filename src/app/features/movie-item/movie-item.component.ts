import { Component, Input, Signal } from '@angular/core';
import { MoneyPipe } from '../../shared/pipes/moneyPipe/money.pipe';
import { DurationPipe } from '../../shared/pipes/durationPipe/duration.pipe';
import { Movie } from '../../core/models/movie.model';
import { HighlightDirective } from '../../shared/directives/highlightDirective/highlight.directive';



@Component({
  selector: 'app-movie-item',
  templateUrl: 'movie-item.component.html',
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ],
  imports: [MoneyPipe, DurationPipe, HighlightDirective]
})
export class MovieItemComponent {

  @Input() movies: Signal<Movie[]>;
}

