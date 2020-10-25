import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/interface/i-recipe';
import { RestApiService } from 'src/app/core/services/rest-api.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private restApi: RestApiService) { }

  recipes: any = [];
  search: any;
  filteredCategory: IRecipe;


  ngOnInit(): void {
    this.loadRecipes();
  }

  loadRecipes(): any {
    return this.restApi.getRecipes().subscribe((data) => {
      // tslint:disable-next-line:no-string-literal
      this.recipes = data['Recipes'];
    });
  }

}
