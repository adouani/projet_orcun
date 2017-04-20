import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {DaoService} from "./services/dao.service";
import {HttpModule} from "@angular/http";
import {MovieComponent} from "./components/movie.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, MovieComponent ],
  bootstrap:    [ AppComponent ],
  providers : [DaoService]
})
export class AppModule { }
