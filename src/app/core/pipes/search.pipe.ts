import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(search: any, ...args: any[]): any {
   if (!args){
     return search;
   }
   return search.filter(item => item.name.toLowerCase().indexOf(args) > -1
   || item.category.toLowerCase().indexOf(args) > -1 || item.ingredients.toLowerCase().indexOf(args) > -1);
  }

}
