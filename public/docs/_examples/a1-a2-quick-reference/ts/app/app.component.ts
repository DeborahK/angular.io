import {Component} from 'angular2/core';
import {MovieListComponent} from './movies/movie-list.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h2 class="title">{{title}}</h2>
            </div>
            <div class="panel-body">
              <my-movie-list>Loading movies ... </my-movie-list></div>
         </div>
         `,
    directives: [MovieListComponent]
})
export class AppComponent {
    public title: string = "Movie Hunter"
}