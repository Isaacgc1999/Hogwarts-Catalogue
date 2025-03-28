import { Injectable, isStandalone } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {

  private storageKey = 'favoriteMovies';

  getFavorites(): Movie[]{
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  setFavorites(movie: Movie): void {
    const favorites = this.getFavorites();
    if(!favorites.some((fav)=> fav.id === movie.id)){
      favorites.push(movie);
      this.updateLocalStorage(favorites);
    }
  }

  removeFavorites(movie: Movie): void {
    const favorites = this.getFavorites();
    const updatedFavorites = favorites.filter((fav)=> fav.id !== movie.id);
    this.updateLocalStorage(updatedFavorites);
  }

  isFavorite(movieId: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some((movie) => movie.id === movieId);
  }

  private updateLocalStorage(favorites: Movie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
