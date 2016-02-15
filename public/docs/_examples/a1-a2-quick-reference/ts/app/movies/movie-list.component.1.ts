// #docregion import
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
// #enddocregion import
import {MovieService} from './movie.service';

// #docregion component 
@Component({
  selector: 'my-movie-list',
  templateUrl: 'app/movies/movie-list.component.html'
})
// #enddocregion component

// #docregion class 
export class MovieListComponent {
}
// #enddocregion class 

export class MovieListComponent2 {
  // #docregion di
    constructor(private _movieService: MovieService) {
    }
  // #enddocregion di 
}