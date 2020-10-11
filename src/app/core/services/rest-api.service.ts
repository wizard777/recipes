import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { IRecipe } from 'src/app/core/interface/i-recipe';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

   private apiUrl = '../../../assets/data/recipes.json';

  constructor(private http: HttpClient) {
  }

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

   // HttpClient API get() method => Fetch phones list
   getRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${this.apiUrl}`)
      .pipe(
        // retry ponawia probe subskybcji danych
        retry(),
        // catch Error obsluguje bledy zglaszane przez obserwable
        catchError(this.handleError)
      );
  }

  // tslint:disable-next-line:typedef
  getRecipesByCategory(category: string) {
    return this.http
      .get<IRecipe[]>(`${this.apiUrl}/category/${category}`);
     // .pipe(map(([res]) => res));
  }


  // tslint:disable-next-line:typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Pobierz błąd po stronie klienta
      errorMessage = error.error.message;
    } else {
      // Pobierz błąd po stronie serwera
      errorMessage = `error code ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
