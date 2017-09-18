import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: 'gridfilter',
  pure: false
})
@Injectable()
export class GridFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        //return items.filter(item => item.title.indexOf(args[0].title) !== -1);
        return items.filter(item => {
            var out = [];
            if(typeof args[0] === "object"){
                for (var i=0, j=args.length; i < j; i+=args[0]) {
                    out.push(args.slice(i, i+args[0]));
                }
            }
            return out;
          }
          
        )
    }
}
