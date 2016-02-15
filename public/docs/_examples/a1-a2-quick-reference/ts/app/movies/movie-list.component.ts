import {Component} from 'angular2/core';
import {MovieService} from './movie.service';
import {IMovie} from './movie';

// #docregion style-url
@Component({
  selector: 'my-movie-list',
  templateUrl:'app/movies/movie-list.component.html',
  styleUrls: ['app/movies/movie-list.component.css'],
  providers: [MovieService]
})
// #enddocregion style-url
export class MovieListComponent {
    public favoriteHero: string;
    public showImage: boolean;
    public movies: IMovie[];
    
    constructor(private _movieService: MovieService) {
        this.showImage = false;
        this.movies = _movieService.getMovies();
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

// #docregion convert-date
    convertToDate(dateString: string): Date {
        return new Date(dateString);
    }
// #enddocregion convert-date

    checkMovieHero(value: string): boolean {
        return this.movies.filter(movie => movie.hero === value).length > 0 ;
    }
}