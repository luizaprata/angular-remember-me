import { Component, OnInit } from '@angular/core';

import { List, PokemonService } from '../pokemon.service';

type HTMLElementEvent<T extends HTMLElement> = KeyboardEvent & {
  target: T;
};

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonsList: List[] = [];
  filter: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .listAbility(100, 100)
      .subscribe((list) => (this.pokemonsList = list.results));
  }

  emitFilter(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.filter = element.value;
  }
}
