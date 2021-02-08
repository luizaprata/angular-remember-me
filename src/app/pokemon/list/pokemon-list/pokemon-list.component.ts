import { Component, OnInit } from '@angular/core';

import { PokemonsAbility, PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonsAbility: PokemonsAbility[] = [];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService
      .listAbility()
      .subscribe((list) => (this.pokemonsAbility = list.results));
  }
}
