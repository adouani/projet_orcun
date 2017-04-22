/**
 * Created by riadh on 17/04/2017.
 */

import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'limitChar'
})

export class TruncatePipe implements PipeTransform
{
    transform(value: string, ...args: any[]) {
        if(args.length ==0 )
            throw new Error('Incorrect params number ...');
        let maxsize = args[0];
        return value.length<maxsize?value:value.substr(0,maxsize);
    }


}