"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var dao_service_1 = require("./services/dao.service");
var http_1 = require("@angular/http");
var movie_component_1 = require("./components/movie.component");
var truncate_pipe_1 = require("./shared/truncate.pipe");
var link_pipe_1 = require("./shared/link.pipe");
var shared_movie_1 = require("./shared/shared.movie");
var movie_genre_component_1 = require("./components/movie.genre.component");
var movie_routes_1 = require("./routes/movie.routes");
var router_1 = require("@angular/router");
var movie_details_component_1 = require("./components/movie.details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule, movie_routes_1.myapp_routes],
        declarations: [app_component_1.AppComponent, movie_component_1.MovieComponent, movie_genre_component_1.MovieGenreComponent,
            link_pipe_1.LinkFormatPipe, movie_details_component_1.MovieInformation, truncate_pipe_1.TruncatePipe],
        bootstrap: [app_component_1.AppComponent],
        providers: [dao_service_1.DaoService, shared_movie_1.SharedMovie]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map