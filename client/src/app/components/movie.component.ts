import {AfterContentInit, Component, OnInit} from "@angular/core";
import {DaoService} from "../services/dao.service";


@Component({
  selector : 'mv-comp',
  moduleId : module.id,
  templateUrl : 'movie.component.html'
})

export class MovieComponent implements OnInit, AfterContentInit
{
  ngAfterContentInit(): void {
    console.log(this.films);
  }
  ngOnInit(): void {
    this._service.getAll('http://localhost:4000/api/movies').subscribe(data => {
      this.films=<Film[]> data;
      this.callDetailsFilm()
    });

  }
  films:Film[];
  constructor(private _service:DaoService) {

  }

  private callDetailsFilm() {
    this._service.getAll('https://api.themoviedb.org/3/movie/399019?api_key=b48982d14dadfead21ac591acca20027')
      .subscribe(data => {
      console.log(data);
    });
  }
}
