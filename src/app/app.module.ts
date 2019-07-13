import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BorderCardDirective } from './directives/border-card.directive';
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import {RoutingModule} from "./routing/routing.module";
import { ErrorsComponent } from './errors/errors.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ErrorsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
