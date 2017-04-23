/**
 * Created by riadh on 23/04/2017.
 */

import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {SharedMovie} from "../shared/shared.movie";
import {FilmDetail} from "../models/movie.model";


@Component({
  selector:'mv-detail',
  moduleId: module.id,
  templateUrl:'movie.details.component.html'
})

export class MovieInformation implements OnInit
{
  movie:FilmDetail;
  constructor(private _sharedmovie: SharedMovie) {}
  ngOnInit(): void {
    this.movie=this._sharedmovie.movies.pop();
  }



}
