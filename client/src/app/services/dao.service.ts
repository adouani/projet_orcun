import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import {Injectable} from "@angular/core";


@Injectable()
export class DaoService
{
  constructor(private _http:Http) {}

  getAll(url:string):Observable<any>
  {
    return this._http.get(url)
      .map((response:Response) =>
        response.json()
      );
  }
}
