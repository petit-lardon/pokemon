import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokemon/pokemon';
import {PokemonsService} from '../services/pokemons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: Array<string>;

  constructor(private pokemonsServices: PokemonsService, private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonsServices.getPokemonsTypes();
  }

  hasType(type: string): boolean {
    const index = this.pokemon.types.indexOf(type);
    if (~index) return true;
    return false;
  }

  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (~index) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    const link = ['pokemon', this.pokemon.id];
    this.router.navigate(link);
  }
}
