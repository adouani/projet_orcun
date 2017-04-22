import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DaoService} from "./services/dao.service";
import {HttpModule} from "@angular/http";
import {MovieComponent} from "./components/movie.component";
import {TruncatePipe} from "./shared/truncate.pipe";
import {LinkFormatPipe} from "./shared/link.pipe";
import {SharedMovie} from "./shared/shared.movie";
import {MovieGenreComponent} from "./components/movie.genre.component";
import {myapp_routes} from "./routes/movie.routes";
import {RouterModule} from "@angular/router";

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, myapp_routes ],
  declarations: [ AppComponent, MovieComponent, MovieGenreComponent,
    LinkFormatPipe, TruncatePipe],
  bootstrap:    [ AppComponent ],
  providers : [DaoService, SharedMovie]
})
export class AppModule { }
