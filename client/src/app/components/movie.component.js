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
var dao_service_1 = require("../services/dao.service");
var MovieComponent = (function () {
    function MovieComponent(_service) {
        this._service = _service;
    }
    MovieComponent.prototype.ngAfterContentInit = function () {
        console.log(this.films);
    };
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getAll('http://localhost:4000/api/movies').subscribe(function (data) {
            _this.films = data;
            _this.callDetailsFilm();
        });
    };
    MovieComponent.prototype.callDetailsFilm = function () {
        this._service.getAll('https://api.themoviedb.org/3/movie/399019?api_key=b48982d14dadfead21ac591acca20027')
            .subscribe(function (data) {
            console.log(data);
        });
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'mv-comp',
        moduleId: module.id,
        templateUrl: 'movie.component.html'
    }),
    __metadata("design:paramtypes", [dao_service_1.DaoService])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map