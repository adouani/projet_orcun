/**
 * Created by riadh on 22/04/2017.
 */
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "../components/movie.component";
import {MovieGenreComponent} from "../components/movie.genre.component";
import {MovieInformation} from "../components/movie.details.component";
/**
 * Created by riadh on 18/04/2017.
 */


// Our site roadmap

const routes:Routes = [
  {
    path:'movies', component:MovieComponent
  },
  {
    path:'',redirectTo:'movies', pathMatch:'full'
  },
  {
    path:'movie-details', component : MovieGenreComponent
  },
  {
    path:'movie-info', component : MovieInformation
  },
  {
    path:'*',redirectTo:'movies', pathMatch:'full'
  },
]


export const myapp_routes = RouterModule.forRoot(routes);
