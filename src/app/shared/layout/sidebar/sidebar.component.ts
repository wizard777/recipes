import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IRecipe } from 'src/app/core/interface/i-recipe';
import { RestApiService } from 'src/app/core/services/rest-api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  names: any;

  @Input() name: IRecipe;

  category: any;

  constructor(private restApi: RestApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
this.ggg();
  }

   ggg(): any{
    this.route.params.subscribe((params) => {
      this.category = this.restApi.getRecipesByCategory(params.category)
      .pipe(tap((res) => console.log('dddd' + res))
      );
    });
   }

}
