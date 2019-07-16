import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PokemonsService} from '../../services/pokemons.service';
import {Pokemon} from '../../pokemon/pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  const pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private pokemonsService: PokemonsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

}
