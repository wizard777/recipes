
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from 'src/app/core/interface/i-recipe';
// import { IRecipe } from 'src/app/core/interface/i-recipe';
import { RestApiService } from 'src/app/core/services/rest-api.service';
// import { CategoryPipe } from 'src/app/core/pipes/category.pipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: any = [];
  search: any;


  constructor(private restApi: RestApiService) {
    console.log(this.recipes);
  }

  ngOnInit(): void {
    this.loadRecipes();

  }

  loadRecipes(): any {
    return this.restApi.getRecipes()
      .subscribe(data => this.recipes = data);
  }

  }
