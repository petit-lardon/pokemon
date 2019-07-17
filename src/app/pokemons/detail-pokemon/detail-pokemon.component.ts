import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonsService} from "../services/pokemons.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
  }

    editPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon/edit', pokemon.id]);
  }
}
