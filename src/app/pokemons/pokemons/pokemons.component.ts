import { Component, OnInit } from '@angular/core';

import {POKEMONS} from "./mock-pokemons";
import {Pokemon} from "../pokemon/pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];
  private title: String = 'Liste des Pokémons';
  private selectedPokemon: Pokemon;

  constructor(private router: Router) { }

  ngOnInit() {
    this.pokemons = POKEMONS
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('pokemon selectionné : ' + pokemon.name);
    this.selectedPokemon = pokemon;
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
