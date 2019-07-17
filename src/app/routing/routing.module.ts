import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ErrorsComponent} from "../errors/errors.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'}, //route lancée au démarrage de l'appli
  {path: '**', component: ErrorsComponent}
];

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class RoutingModule { }
