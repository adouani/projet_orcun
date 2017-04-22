import {Component,  OnInit} from "@angular/core";
import {FilmDetail} from "../models/movie.model";
import {SharedMovie} from "../shared/shared.movie";


@Component({
  selector : 'mv-genre-comp',
  moduleId : module.id,
  templateUrl : 'movie.genre.component.html'
})

export class MovieGenreComponent implements OnInit
{
  films_details: FilmDetail[] = [];
  ngOnInit(): void {

  }
  constructor(private _sharedmovie : SharedMovie) {
    this.films_details = _sharedmovie.movies;
    console.log(this.films_details);
  }
}
