import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PokemonsComponent} from "../pokemons/pokemons.component";
import {DetailPokemonComponent} from "../detail-pokemon/detail-pokemon.component";
import {ErrorsComponent} from "../errors/errors.component";

const appRoutes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent},
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
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
