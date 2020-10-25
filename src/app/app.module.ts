import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './home/pages/recipes/recipes.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './core/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    NavbarComponent,
    PageNotFoundComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
