/**
 * Created by riadh on 23/04/2017.
 */
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
var MovieInformation = (function () {
    function MovieInformation(_sharedmovie) {
        this._sharedmovie = _sharedmovie;
    }
    MovieInformation.prototype.ngOnInit = function () {
        this.movie = this._sharedmovie.movies.pop();
    };
    return MovieInformation;
}());
MovieInformation = __decorate([
    core_1.Component({
        selector: 'mv-detail',
        moduleId: module.id,
        templateUrl: 'movie.details.component.html'
    }),
    __metadata("design:paramtypes", [shared_movie_1.SharedMovie])
], MovieInformation);
exports.MovieInformation = MovieInformation;
//# sourceMappingURL=movie.details.component.js.map