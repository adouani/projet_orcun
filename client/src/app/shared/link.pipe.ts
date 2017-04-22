import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by riadh on 21/04/2017.
 */


@Pipe({
  name:'format_link',
})

export class LinkFormatPipe implements PipeTransform
{
  transform(value: any) {
    return "http://image.tmdb.org/t/p/w185/"+value;
  }


}


