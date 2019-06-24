import { Component, OnInit } from '@angular/core';

import {POKEMONS} from "./mock-pokemons";
import {Pokemon} from "../pokemon/pokemon";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];
  private title: String = 'Liste des Pokémons';
  private selectedPokemon: Pokemon;

  constructor() { }

  ngOnInit() {
    this.pokemons = POKEMONS
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('pokemon selectionné : ' + pokemon.name);
    this.selectedPokemon = pokemon;
  }

}
