import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any): any {

    let cats: any;
    for (const cat of value) {
      cats = cat.ingredients.split(', ').join('\n');
      console.log(cats);
    }
    return cats;

  }

}

