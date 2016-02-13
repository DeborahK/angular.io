import {Component} from 'angular2/core';
import {IMovie} from './movie';

@Component({
    selector: 'my-movie-list',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css']
})
export class MovieListComponent {
    public favoriteHero: string;
    public showImage: boolean;
    public movies: IMovie[];
    constructor() {
        this.showImage = false;
        this.movies = [
            {
                hero: "Celeritas",
                imageurl: "../images/hero.png",
                movieId: 1,
                mpaa: "pg-13",
                releaseDate: "2015-12-19T00:00:00",
                title: "Celeritas Reigns",
                price: 12.95,
                starRating: 4.925,
                approvalRating: .97
            },
            {
                hero: "Mr. Nice",
                imageurl: "../images/villain.png",
                movieId: 2,
                mpaa: "pg-13",
                releaseDate: "2015-12-18T00:00:00",
                title: "No More Mr. Nice Guy",
                price: 14.95,
                starRating: 4.6,
                approvalRating: .94
            },
            {
                hero: "Angular",
                imageurl: "../images/ng-logo.png",
                movieId: 3,
                mpaa: "pg-13",
                releaseDate: "2015-12-17T00:00:00",
                title: "Angular to the Rescue",
                price: 15.95,
                starRating: 4.98,
                approvalRating: .9995           }
        ];
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    convertToDate(dateString: string): Date {
        return new Date(dateString);
    }
    
    checkMovieTitle(value: string): boolean {
        return this.movies.filter(movie => movie.hero === value).length > 0 ;
    }
}