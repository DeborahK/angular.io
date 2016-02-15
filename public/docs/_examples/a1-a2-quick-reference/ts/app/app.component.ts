import {Component} from 'angular2/core';
import {MovieListComponent} from './movies/movie-list.component';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div>
                <h2>{{title}}</h2>
            </div>
            <div>
              <my-movie-list>Loading movies ... </my-movie-list></div>
         </div>
         `,
    directives: [MovieListComponent]
})
export class AppComponent {
    title: string = "Hero Movie Hunter"
}