"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dao_service_1 = require("../services/dao.service");
var shared_movie_1 = require("../shared/shared.movie");
var MovieComponent = (function () {
    function MovieComponent(_service, _sharedmovie) {
        var _this = this;
        this._service = _service;
        this._sharedmovie = _sharedmovie;
        this.films_details = [];
        this.busy = true;
        // Get the movie list from our database
        this._service.getAll('http://localhost:4000/api/movies').subscribe(function (data) {
            _this.films = data;
            _this.callFilmDetails();
        });
    }
    MovieComponent.prototype.setMovieInfo = function (id) {
        this.movie_id = id;
    };
    MovieComponent.prototype.ngOnInit = function () {
    };
    MovieComponent.prototype.callFilmDetails = function () {
        var _this = this;
        // for each movie in the database get all information about it from themoviedb api
        this.films.forEach(function (mv) {
            _this._service
                .getAll("https://api.themoviedb.org/3/movie/" + mv.movieid + "?api_key=b48982d14dadfead21ac591acca20027")
                .subscribe(function (data) {
                _this.films_details.push(data);
                console.log(data);
                _this.busy = false;
            });
        });
    };
    MovieComponent.prototype.getGenre = function (genre_id) {
        this.genre_id = genre_id;
    };
    MovieComponent.prototype.getProductionCountry = function (country_id) {
        this.country_id = country_id;
    };
    MovieComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        // if the user has choose a filter (genre, country production)
        // we display all movies that match this filter in a second page
        var temp_list = [];
        if (this.genre_id) {
            temp_list = this.films_details.filter(function (mv) {
                var ls_genres = mv.genres.filter(function (gr) { return gr.id == _this.genre_id; });
                return ls_genres.length == 0 ? false : true;
            });
        }
        else if (this.country_id) {
            temp_list = this.films_details.filter(function (mv) {
                var ls_country = mv.production_countries.filter(function (pc) { return pc.name == _this.country_id; });
                return ls_country.length == 0 ? false : true;
            });
        }
        else if (this.movie_id) {
            temp_list = this.films_details.filter(function (mv) { return mv.id == _this.movie_id; });
        }
        this._sharedmovie.movies = temp_list;
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'mv-comp',
        moduleId: module.id,
        templateUrl: 'movie.component.html'
    }),
    __metadata("design:paramtypes", [dao_service_1.DaoService, shared_movie_1.SharedMovie])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map