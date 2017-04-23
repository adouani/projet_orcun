"use strict";
/**
 * Created by riadh on 22/04/2017.
 */
var router_1 = require("@angular/router");
var movie_component_1 = require("../components/movie.component");
var movie_genre_component_1 = require("../components/movie.genre.component");
var movie_details_component_1 = require("../components/movie.details.component");
/**
 * Created by riadh on 18/04/2017.
 */
// Our site roadmap
var routes = [
    {
        path: 'movies', component: movie_component_1.MovieComponent
    },
    {
        path: '', redirectTo: 'movies', pathMatch: 'full'
    },
    {
        path: 'movie-details', component: movie_genre_component_1.MovieGenreComponent
    },
    {
        path: 'movie-info', component: movie_details_component_1.MovieInformation
    },
    {
        path: '*', redirectTo: 'movies', pathMatch: 'full'
    },
];
exports.myapp_routes = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=movie.routes.js.map