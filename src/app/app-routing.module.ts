import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';
import { RecipesComponent } from './home/pages/recipes/recipes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'recipe-list' },
  { path: 'recipe-list' , component: RecipesComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
