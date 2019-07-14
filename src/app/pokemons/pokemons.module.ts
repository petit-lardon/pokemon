import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonsComponent} from "./pokemons/pokemons.component";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {BorderCardDirective} from "./directives/border-card.directive";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {PokemonRoutingModule} from "./pokemon-routing.module";

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonsModule { }
