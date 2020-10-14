import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }


    let cats: any;
    for (const cat of value) {
      // console.log((cat.ingredients  ));
      // if (cat.ingredients === 'Occasional dishe') {
      //   cats.push( cat);
      // }

      cats = cat.ingredients.split(', ').join('\n');

      // console.log(cats);
    }
    return cats;

    // if (!category) {
    //   return category;
    // }
    // console.log(category);

    // return  category.filter((item, i ) =>
    //       item.category === 'Main dish'
    //    || item.category === 'Desserts'
    //    || ( console.log(item.category === 'Occasional dishes'.indexOf(item) !== i))
    //    );


  }

}

