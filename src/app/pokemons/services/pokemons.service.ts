import { Injectable } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon";
import {POKEMONS} from "../pokemons/mock-pokemons";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }

  getPokemon(id: number): Pokemon {
    const pokemons = this.getPokemons();

    for (let i = 0; i < pokemons.length; i++) {
      if (id === pokemons[i].id) {
        return pokemons[i];
      }
    }
  }

  getPokemonsTypes(): Array<string> {
      return ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée'];
  }
}
