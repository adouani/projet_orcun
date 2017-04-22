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
var core_1 = require("@angular/core");
var shared_movie_1 = require("../shared/shared.movie");
var MovieGenreComponent = (function () {
    function MovieGenreComponent(_sharedmovie) {
        this._sharedmovie = _sharedmovie;
        this.films_details = [];
        this.films_details = _sharedmovie.movies;
        console.log(this.films_details);
    }
    MovieGenreComponent.prototype.ngOnInit = function () {
    };
    return MovieGenreComponent;
}());
MovieGenreComponent = __decorate([
    core_1.Component({
        selector: 'mv-genre-comp',
        moduleId: module.id,
        templateUrl: 'movie.genre.component.html'
    }),
    __metadata("design:paramtypes", [shared_movie_1.SharedMovie])
], MovieGenreComponent);
exports.MovieGenreComponent = MovieGenreComponent;
//# sourceMappingURL=movie.genre.component.js.map