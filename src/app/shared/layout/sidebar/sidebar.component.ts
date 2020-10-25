import { Component, OnInit} from '@angular/core';
import { IRecipe } from 'src/app/core/interface/i-recipe';
import { RestApiService } from 'src/app/core/services/rest-api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(private Api: RestApiService) { }

  categories: any = [];
  filteredCategory: IRecipe;


  ngOnInit(): void {
    this.loadCategory();
  }


  loadCategory(): any {
    return this.Api.getRecipes().subscribe(data => {
      // tslint:disable-next-line:no-string-literal
      this.categories = data['Recipes'];
      this.filteredCategory = this.categories.reduce((previousVal, currentVal) => {
        if (!previousVal.some(
          (item) => item.category === currentVal.category
          // && item.id === currentVal.id
        )
        ) {
          previousVal.push(currentVal);
        }
        return previousVal;
      }, []);
     // console.log(this.filteredCategory);
    });
  }


}
