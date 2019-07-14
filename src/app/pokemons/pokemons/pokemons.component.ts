import { Component, OnInit } from '@angular/core';

import {Pokemon} from "../pokemon/pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../services/pokemons.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  providers: [PokemonsService]
})
export class PokemonsComponent implements OnInit {

  private pokemons: Pokemon[];
  private title: String = 'Liste des Pokémons';
  private selectedPokemon: Pokemon;

  constructor(private router: Router, private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    console.log('pokemon selectionné : ' + pokemon.name);
    this.selectedPokemon = pokemon;
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
