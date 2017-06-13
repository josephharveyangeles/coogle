import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { RecipesComponent } from './main/recipes/recipes.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
