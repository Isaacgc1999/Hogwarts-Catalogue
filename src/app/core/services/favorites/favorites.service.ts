import { Injectable, isStandalone, signal } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  private storageKey = 'favoriteMovies';

  favorites = signal<Movie[]>(localStorage.getItem(this.storageKey) 
  ? JSON.parse(localStorage.getItem(this.storageKey)!) : []);

  getFavorites(): Movie[]{
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  toggleFavorite(movie: Movie): void {
    if (this.isFavorite(movie)) {
      this.favorites.set(this.favorites().filter(m => m.id !== movie.id));
      this.updateLocalStorage(this.favorites());
    } else {
      this.favorites.update(current => [...current, movie]);
      this.updateLocalStorage(this.favorites());
    }
  }

  isFavorite(movie: Movie): boolean {
    return this.favorites().some(m => m.id === movie.id);
  }

  private updateLocalStorage(favorites: Movie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
