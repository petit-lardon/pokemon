import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonsComponent} from '../pokemons/pokemons/pokemons.component';
import {DetailPokemonComponent} from '../pokemons/detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from './pokemon-form/edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'pokemon/edit/:id', component: EditPokemonComponent},
  {path: 'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule { }
