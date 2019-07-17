import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PokemonsComponent} from './pokemons/pokemons.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {BorderCardDirective} from './directives/border-card.directive';
import {PokemonTypeColorPipe} from './pipes/pokemon-type-color.pipe';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {PokemonRoutingModule} from './pokemon-routing.module';
import {PokemonsService} from './services/pokemons.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './pokemon-form/edit-pokemon/edit-pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule { }
