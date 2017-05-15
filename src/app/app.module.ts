import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { InputComponent } from './main/input/input.component';

import { RecipeService } from './main/recipe.service';
import { ResultsComponent } from './main/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
