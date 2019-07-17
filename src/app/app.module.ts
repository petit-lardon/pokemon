import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from "./routing/routing.module";
import { ErrorsComponent } from './errors/errors.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import {PokemonsModule} from "./pokemons/pokemons.module";

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    PokemonsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
