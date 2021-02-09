import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { List } from '../pokemon.service';

type HTMLElementEvent<T extends HTMLElement> = KeyboardEvent & {
  target: T;
};

@Component({
  templateUrl: './pokemon-list-screen.component.html',
  styleUrls: ['./pokemon-list-screen.component.scss'],
})
export class PokemonListScreenComponent implements OnInit {
  pokemonsList: List[] = [];
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonsList = this.activatedRoute.snapshot.data.pokemonsList.results;
  }

  emitFilter(event: KeyboardEvent) {
    const element = event.target as HTMLInputElement;
    this.filter = element.value;
  }
}
