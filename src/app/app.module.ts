import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RecipesService } from './main/recipes/recipes.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { RecipeItemComponent } from './main/recipes/recipe-item/recipe-item.component';
import { RandomLabelColorDirective } from './main/directives/random-label-color.directive';
import { RecipeBodyComponent } from './main/recipes/recipe-body/recipe-body.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    RecipesComponent,
    RecipeItemComponent,
    RandomLabelColorDirective,
    RecipeBodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
