import { Component, OnDestroy, OnInit } from "@angular/core";
import { DaoService } from "../services/dao.service";
import { FilmDetail } from "../models/movie.model";
import { SharedMovie } from "../shared/shared.movie";

@Component({
  selector : 'mv-comp',
  moduleId : module.id,
  templateUrl : 'movie.component.html'
})

export class MovieComponent implements OnInit, OnDestroy
{
  idMovieSelected:number;
  films:Film[];
  films_details: FilmDetail[] = [];
  busy:boolean = true;
  country_id : string;
  genre_id : number;
  ngOnInit(): void {
  }
  constructor(private _service:DaoService, private _sharedmovie : SharedMovie) {
    // Get the movie list from our database
    this._service.getAll('http://localhost:4000/api/movies').subscribe(data => {
      this.films=<Film[]> data;
      this.callFilmDetails();
    });
  }

  private callFilmDetails() {
    // for each movie in the database get all information about it from themoviedb api
    this.films.forEach(mv => {
      this._service
        .getAll(`https://api.themoviedb.org/3/movie/${mv.movieid}?api_key=b48982d14dadfead21ac591acca20027`)
        .subscribe(data => {
          this.films_details.push(<FilmDetail>data);
          console.log(data);
          this.busy=false;
          }
        );
    });
  }

  private getGenre(genre_id:number) {
    this.genre_id =genre_id;
  }
  private getProductionCountry(country_id:string) {
    this.country_id =country_id;
  }
  ngOnDestroy(): void {
    // if the user has choose a filter (genre, country production)
    // we display all movies that match this filter in a second page
    let temp_list:FilmDetail[] = []
    if(this.genre_id)
    {
      temp_list= this.films_details.filter(mv => {
        let ls_genres = mv.genres.filter(gr =>  gr.id == this.genre_id );
        return ls_genres.length == 0 ? false:true;
      })
    }
    else if (this.country_id)
    {
      temp_list = this.films_details.filter(mv => {
        let ls_country = mv.production_countries.filter(pc => pc.name == this.country_id);
        return ls_country.length ==0 ? false:true;
      })
    }
    this._sharedmovie.movies = temp_list;
  }
}
