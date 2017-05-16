import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ResultsService } from './main/results/results.service';
import { RecipeService } from './main/recipe.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';
import { ResultsComponent } from './main/results/results.component';
import { RecipeComponent } from './main/results/recipe/recipe.component';
import { RandomLabelColorDirective } from './main/directives/random-label-color.directive';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    ResultsComponent,
    RecipeComponent,
    RandomLabelColorDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
