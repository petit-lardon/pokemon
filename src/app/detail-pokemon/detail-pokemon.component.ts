import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon/pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../pokemons/mock-pokemons";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;

    let id = +this.route.snapshot.paramMap.get('id');//synchrone. le programme est bloqué tant qu'on a pas récupéré le paramètre de l'url
    // + permet de caster la variable en un nombre
    for (let i = 0; i < this.pokemons.length; i++) {
      if(this.pokemons[i].id === id) {
        this.pokemon = this.pokemons[i];
      }
    }
  }

  goBack(): void {
    this.router.navigate(['/pokemons']);
    /**
     * window.history.back();
     */
  }
}
