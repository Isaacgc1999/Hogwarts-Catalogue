import { Component, Input, Signal } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MoneyPipe } from '../pipes/moneyPipe/money.pipe';
import { DurationPipe } from '../pipes/durationPipe/duration.pipe';


@Component({
  selector: 'app-movie-item',
  templateUrl: 'movie-item.component.html',
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ],
  imports: [MoneyPipe, DurationPipe]
})
export class MovieItemComponent {

  @Input() movies: Signal<Movie[]>;
}

