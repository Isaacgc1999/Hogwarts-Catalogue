import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { 
        path: 'home', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
    },
    {
        path: 'movie-details/:id',
        loadComponent: () => import('./features/movie-details/movie-details.component').then(m => m.MovieDetailsComponent)
    },
    { path: '**', redirectTo: 'home' },
];

export const appRouting = provideRouter(routes);
