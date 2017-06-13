import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';

import { RecipesService } from './main/recipes/recipes.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { RecipesComponent } from './main/recipes/recipes.component';
import { RecipeItemComponent } from './main/recipes/recipe-item/recipe-item.component';
import { DishTypeStyleDirective } from './main/directives/dishtype-style.directive';
import { RecipeBodyComponent } from './main/recipes/recipe-body/recipe-body.component';

import { DishTypeFormatPipe } from './main/pipes/dish-type-format.pipe';

@NgModule({
  declarations: [
    DishTypeFormatPipe,
    AppComponent,
    MainComponent,
    InputComponent,
    RecipesComponent,
    RecipeItemComponent,
    DishTypeStyleDirective,
    RecipeBodyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
